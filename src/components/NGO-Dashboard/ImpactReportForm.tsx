'use client'

import React from 'react';
import Link from 'next/link';

const ImpactReportExplanation: React.FC = () => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#4A3F35]">Submit Impact Report</h2>
      <p className="text-gray-600 mb-6">
        An impact report is a crucial document that summarizes the results and outcomes of your campaign. 
        It allows stakeholders, including donors, to see how their contributions made a difference. 
        By submitting your final report, you provide valuable insights into the success of your campaign, 
        highlighting key performance indicators (KPIs), milestones achieved, and overall impact.
      </p>
      <p className="text-gray-600 mb-6">
        Each impact report contributes to building trust and transparency. It not only showcases the 
        effectiveness of the resources used but also reinforces your organization's credibility for 
        future campaigns.
      </p>
      <p className="text-gray-600 mb-6">
        To submit your final impact report, please visit the attestation page where you can provide a 
        report link and declare KPIs achieved. This helps to ensure that all impact data is stored in 
        a verifiable and transparent way.
      </p>
      <Link
        href="https://base-sepolia.easscan.org/attestation/attestWithSchema/0xcd9c6546143490a60815860fe7103efcbc906853d6d96969b6bfc03dcb1d2900"
        className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity inline-block mt-4"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Submit Impact Report
      </Link>
    </div>
  );
};

export default ImpactReportExplanation;
