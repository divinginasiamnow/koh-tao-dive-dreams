import React from 'react';
import BookingForm from '../components/BookingForm';

const Instructor = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">PADI Instructor Course</h1>
    <p className="mb-4">Become a certified PADI Instructor and teach the next generation of divers. The Instructor course prepares you for a rewarding career in diving education.</p>
    <ul className="list-disc pl-6 mb-6">
      <li>Comprehensive training</li>
      <li>International certification</li>
      <li>Job placement support</li>
      <li>Prerequisite: Divemaster</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-4">Course Includes</h2>
    <ul className="list-disc pl-6 mb-6">
      <li>Instructor skills practice</li>
      <li>PADI Instructor materials</li>
      <li>Certification card</li>
      <li>Free tea, coffee, water</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-4">What's Next?</h2>
    <p className="mb-6">Instructor opens doors to teaching and working in the dive industry worldwide.</p>
    <BookingForm />
  </div>
);

export default Instructor;
