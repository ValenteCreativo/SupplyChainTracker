'use client'

import React from 'react';
import { FaUserPlus, FaTachometerAlt, FaCheckCircle } from 'react-icons/fa';

const DonorFlowDiagram: React.FC = () => {
  return (
    <div className="w-full p-5">
      <div className="max-w-[5000px] w-[95%] p-5 rounded-lg shadow-md">
        <h1 className="text-[#A48460] text-center mb-8 text-4xl font-bold">Donor User Flow</h1>
        <div className="flex justify-between items-start overflow-x-auto pb-5">
          {[
            {
              icon: <FaUserPlus size={20} />,
              title: "Register",
            },
            {
              icon: <FaTachometerAlt size={20} />,
              title: "Dashboard",
            },
            {
              icon: <FaCheckCircle size={20} />,
              title: "Attestation Tracker",
            },
          ].map((step, index, array) => (
            <div
              key={index}
              className="bg-[#F1EDE9] border-2 border-[#A48460] rounded-lg p-4 m-2 w-48 text-center relative flex-shrink-0"
            >
              <div className="font-bold mb-2 text-[#A48460] flex flex-col items-center justify-center">
                {step.icon}
                <span className="mt-2">{step.title}</span>
              </div>
              {index !== array.length - 1 && (
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-2xl text-[#A48460]">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-center text-[#4A3F35]">
          * This platform provides a transparent and efficient way for donors to contribute to campaigns, ensuring accountability and traceability throughout the donation process.
        </p>
      </div>
    </div>
  );
};

export default DonorFlowDiagram;
