'use client'

import React from 'react';
import DonationProgress from '../../components/NGO-Dashboard/DonationProgress';
import AttestationViewer from '../../components/Donor-Dashboard/AttestationViewer'; // new


const Donor: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F1E3] text-[#333]">
      
      <main className="p-8 space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donation Progress */}
          <DonationProgress />

          {/* Notifications */}
        

          {/* Attestation Viewer */}
          <AttestationViewer /> {/* Donors can view attestations related to their donations */}
        </section>
      </main>
    </div>
  );
};

export default Donor;
