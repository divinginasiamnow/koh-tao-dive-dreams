import React from 'react';
import BookingForm from '../components/BookingForm';

const Divemaster = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">PADI Divemaster Course</h1>
    <p className="mb-4">Start your professional diving career with the Divemaster course. Learn leadership, dive guiding, and advanced skills to work in the dive industry worldwide.</p>
    <ul className="list-disc pl-6 mb-6">
      <li>Flexible schedule</li>
      <li>Professional training</li>
      <li>Work placement assistance</li>
      <li>Prerequisite: Rescue Diver</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-4">Course Includes</h2>
    <ul className="list-disc pl-6 mb-6">
      <li>Leadership skills</li>
      <li>PADI Divemaster materials</li>
      <li>Certification card</li>
      <li>Free tea, coffee, water</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-4">What's Next?</h2>
    <p className="mb-6">Divemaster is a prerequisite for Instructor and opens doors to dive jobs worldwide.</p>
    <BookingForm />
  </div>
);

export default Divemaster;
