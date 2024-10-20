'use client'

import React from 'react';
import { FaSearch, FaChartLine, FaNetworkWired, FaUserPlus} from 'react-icons/fa';

const SupplierFlowDiagram: React.FC = () => {
  return (
    <div className="w-full p-5">
      <div className="max-w-[5000px] w-[95%] p-5 rounded-lg shadow-md">
        <h1 className="text-[#A48460] text-center mb-8 text-4xl font-bold">Supplier User Flow</h1>
        <div className="flex justify-between items-start overflow-x-auto pb-5">
          {[
            {
              icon: <FaUserPlus size={20} />,
              title: "Login with Smart Wallet",
              steps: [],
            },
            {
              icon: <FaSearch size={20} />,
              title: "Search Campaigns",
              steps: ["Browse Active Campaigns", "Collaborate"],
            },
            {
              icon: <FaChartLine size={20} />,
              title: "Impact Dashboard",
              steps: ["Review Impact Metrics", "Visualize NGO's accountability"],
            },
            {
              icon: <FaNetworkWired size={20} />,
              title: "Peace Network",
              steps: ["Review ecosystem's impact"],
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
              {step.steps?.map((subStep, subIndex) => (
                <div key={subIndex} className="bg-white border border-[#D6BA8A] rounded p-2 my-2 text-sm">
                  {subStep}
                </div>
              ))}
              {index !== array.length - 1 && (
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-2xl text-[#A48460]">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-center text-[#4A3F35]">
          * The platform enables suppliers to engage with campaigns, track impact metrics, and contribute to a collaborative peace-building network in real-time.
        </p>
      </div>
    </div>
  );
};

export default SupplierFlowDiagram;
