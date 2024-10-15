'use client'

import React from 'react';
import DashboardNav from '../../components/DashboardNav';
import DonationHistoryChart from '../../components/DonationHistoryChart';
import ImpactStories from '../../components/ImpactStories';
import ResourceRequestForm from '../../components/ResourceRequestForm';
import ResourceAllocation from '../../components/ResourceAllocation'; // new

const NGO: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F1E3] text-[#333]">
      <DashboardNav />
      <main className="p-8 space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donation History */}
          <div className="col-span-1 md:col-span-2">
            <DonationHistoryChart />
          </div>

          {/* Impact Stories */}
          <ImpactStories />

          {/* Resource Request Form */}
          <ResourceRequestForm />

          {/* Resource Allocation */}
          <ResourceAllocation /> {/* This will show how resources are being distributed */}
        </section>
      </main>
    </div>
  );
};

export default NGO;
