import React from 'react';
import BookingForm from '../components/BookingForm';

const OpenWater = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">PADI Open Water Course</h1>
    <p className="mb-4">Become a certified diver with the world's most popular entry-level course. Learn the basics of scuba diving, safety, and underwater skills in a fun and supportive environment.</p>
    <ul className="list-disc pl-6 mb-6">
      <li>4 days, 5 dives</li>
      <li>International certification</li>
      <li>All equipment included</li>
      <li>Experienced instructors</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-4">Course Includes</h2>
    <ul className="list-disc pl-6 mb-6">
      <li>All PADI materials</li>
      <li>Full scuba gear rental</li>
      <li>Pool & open water training</li>
      <li>Certification card</li>
      <li>Free tea, coffee, water</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-4">What's Next?</h2>
    <p className="mb-6">After your Open Water course, you can continue with Advanced Open Water or specialty courses to expand your skills.</p>
    <BookingForm />
  </div>
);

export default OpenWater;
