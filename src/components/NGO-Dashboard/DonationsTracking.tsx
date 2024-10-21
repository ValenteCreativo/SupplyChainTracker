'use client'

import React from 'react';
import Link from 'next/link';

const DonationsTrackingExplanation: React.FC = () => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#4A3F35]">Track Donations in Supply Chain</h2>
      <p className="text-gray-600 mb-6">
        Tracking donations throughout the supply chain is crucial for ensuring transparency and accountability in humanitarian efforts. 
        By registering the current status, location, and other details of each donation at different stages, you help to create a clear 
        and verifiable record of how donations are managed and delivered to those in need.
      </p>
      <p className="text-gray-600 mb-6">
        Each time a donation changes hands or reaches a new stage in the supply chain, it is important to record the event. This process 
        allows all stakeholders, including donors, recipients, and the public, to monitor the flow of resources and ensure that they 
        are reaching their intended destinations efficiently and effectively.
      </p>
      <p className="text-gray-600 mb-6">
        To register a donation in the supply chain, use the official attestation system where you will provide essential details such as 
        the donation description, current location, and the date of the update.
      </p>
      <Link
        href="https://base-sepolia.easscan.org/attestation/attestWithSchema/0x3c2ff9d1a9fb8a66a0c004c7de73e3ab856349da2cc3e1075018caab7ce8a112"
        className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity inline-block mt-4"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Track Donation in Supply Chain
      </Link>
    </div>
  );
};

export default DonationsTrackingExplanation;
