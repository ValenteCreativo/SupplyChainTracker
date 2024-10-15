'use client'

import React from 'react';
import DonationHistoryChart from '../../components/DonationHistoryChart';
import DashboardNav from '../../components/Dashboardnav';
import ImpactStories from '../../components/ImpactStories';
import DonationProgress from '../../components/DonationProgress';
import NotificationsPanel from '../../components/NotificationsPanel';
import DonorTestimonials from '../../components/DonorTestimonials';
import ResourceRequestForm from '../../components/ResourceRequestForm';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F1E3] text-[#333]">
      <DashboardNav />
      <main className="p-8 space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donation History Chart */}
          <div className="col-span-1 md:col-span-2">
            <DonationHistoryChart />
          </div>

          {/* Donation Progress */}
          <DonationProgress />

          {/* Notifications Panel */}
          <NotificationsPanel />

          {/* Donor Testimonials */}
          <DonorTestimonials />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Impact Stories */}
          <ImpactStories />

          {/* Resource Request Form */}
          <ResourceRequestForm />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
