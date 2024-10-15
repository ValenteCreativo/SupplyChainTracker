'use client'

import React from 'react';
import DashboardNav from '../../components/DashboardNav';
import DonationProgress from '../../components/DonationProgress';
import DonorTestimonials from '../../components/DonorTestimonials';
import NotificationsPanel from '../../components/NotificationsPanel';
import AttestationViewer from '../../components/AttestationViewer'; // new
import BaseInteractivity from '../../components/BaseInteractivity'; // new

const Donor: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F1E3] text-[#333]">
      <DashboardNav />
      <main className="p-8 space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donation Progress */}
          <DonationProgress />

          {/* Notifications */}
          <NotificationsPanel />

          {/* Donor Testimonials */}
          <DonorTestimonials />

          {/* Attestation Viewer */}
          <AttestationViewer /> {/* Donors can view attestations related to their donations */}

          {/* Base Interactivity */}
          <BaseInteractivity /> {/* Donors can interact with blockchain data */}
        </section>
      </main>
    </div>
  );
};

export default Donor;
