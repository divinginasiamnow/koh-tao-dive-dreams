import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { randomUUID } from 'crypto';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const db = new Database('./bookings.db');

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS booking_inquiries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    course_title TEXT NOT NULL,
    preferred_date TEXT,
    experience_level TEXT,
    message TEXT,
    created_at TEXT NOT NULL
  )
`);

// Email transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 587,
  secure: false,
  auth: {
    user: 'resend',
    pass: process.env.RESEND_API_KEY,
  },
});

// API Routes

// Submit booking
app.post('/api/bookings', (req, res) => {
  try {
    const { name, email, phone, course_title, preferred_date, experience_level, message } = req.body;
    const id = randomUUID();
    const created_at = new Date().toISOString();

    const stmt = db.prepare(`
      INSERT INTO booking_inquiries (id, name, email, phone, course_title, preferred_date, experience_level, message, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(id, name, email, phone, course_title, preferred_date, experience_level, message, created_at);

    // Send email notification
    const mailOptions = {
      from: 'noreply@koh-tao-dive-dreams.com',
      to: 'peter@onemedia.asia',
      subject: 'New Booking Inquiry',
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Course/Dive:</strong> ${course_title}</p>
        <p><strong>Preferred Date:</strong> ${preferred_date || 'N/A'}</p>
        <p><strong>Experience Level:</strong> ${experience_level || 'N/A'}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email send error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit booking' });
  }
});

// Get all bookings
app.get('/api/bookings', (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM booking_inquiries ORDER BY created_at DESC');
    const bookings = stmt.all();
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Delete booking
app.delete('/api/bookings/:id', (req, res) => {
  try {
    const { id } = req.params;
    const stmt = db.prepare('DELETE FROM booking_inquiries WHERE id = ?');
    stmt.run(id);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete booking' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});