'use client'

import React from 'react';
import Link from 'next/link';

const MilestonesForm: React.FC = () => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#4A3F35]">Attest Milestones</h2>
      <p className="text-gray-600 mb-6">
        Each milestone represents a critical step in the journey of your campaign. 
        By declaring the milestones you've reached and uploading the corresponding evidence, 
        you contribute to creating a transparent and traceable record of your progress. 
        This not only helps your donors and stakeholders stay informed, but it also builds trust 
        and credibility for your organization.
      </p>
      <p className="text-gray-600 mb-6">
        Attesting milestones allows you to measure impact effectively. Each attestation becomes 
        a verifiable record, creating a chain of accountability that enhances transparency. 
        By providing evidence for every milestone, you demonstrate the tangible outcomes of the 
        resources entrusted to your campaign, whether they are donations, volunteer hours, 
        or in-kind contributions.
      </p>
      <p className="text-gray-600 mb-6">
        To attest a milestone, follow the process by visiting the official attestation system 
        where you will provide details such as the milestone name, the date it was achieved, 
        and evidence that supports its completion.
      </p>
      <Link
        href="https://base-sepolia.easscan.org/attestation/attestWithSchema/0x3a4a26b258d8728a2d6b0637f196f619258118459aa045ff9dfa36f551bc573a"
        className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity inline-block mt-4"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Attest a Milestone
      </Link>
    </div>
  );
};

export default MilestonesForm;
