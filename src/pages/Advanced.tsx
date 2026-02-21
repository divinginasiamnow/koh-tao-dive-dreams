import React from 'react';
import BookingForm from '../components/BookingForm';

const Advanced = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">PADI Advanced Open Water Course</h1>
    <p className="mb-4">Take your diving to the next level with adventure dives, deep diving, navigation, and more. Perfect for divers looking to expand their skills and explore new environments.</p>
    <ul className="list-disc pl-6 mb-6">
      <li>2 days, 5 dives</li>
      <li>Deep & navigation specialties</li>
      <li>Flexible schedule</li>
      <li>All equipment included</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-4">Course Includes</h2>
    <ul className="list-disc pl-6 mb-6">
      <li>Adventure dives</li>
      <li>Full scuba gear rental</li>
      <li>PADI certification card</li>
      <li>Free tea, coffee, water</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-4">What's Next?</h2>
    <p className="mb-6">After Advanced, you can take specialty courses or progress to Rescue Diver.</p>
    <BookingForm />
  </div>
);

export default Advanced;
