'use client'

import React from 'react';

const AttestationViewer: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Your Donation Attestations</h3>
      <p className="text-sm text-gray-700">
        View detailed attestations that confirm how your donations were used by the NGOs.
      </p>
      {/* Example list of attestations */}
      <ul className="space-y-2">
        <li className="text-sm text-gray-600">Attestation #1: Verified donation to XYZ Program</li>
        <li className="text-sm text-gray-600">Attestation #2: Verified donation to ABC Fund</li>
        {/* Add more attestations as needed */}
      </ul>
    </div>
  );
};

export default AttestationViewer;
