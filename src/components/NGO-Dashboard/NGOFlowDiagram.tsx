import React from 'react';
import { FaUserPlus, FaBuilding, FaTachometerAlt, FaChartLine, FaBullhorn } from 'react-icons/fa'; // Importa íconos

const NGOFlowDiagram: React.FC = () => {
  return (
    <div className="w-full p-5">
      <div className="max-w-[5000px] w-[95%] p-5 rounded-lg shadow-md">
        <h1 className="text-[#A48460] text-center mb-8 text-4xl font-bold">NGO User Flow</h1>
        <div className="flex justify-between items-start overflow-x-auto pb-5">
          {[
            {
              icon: <FaUserPlus size={20} />,
              title: "Register",
              steps: [], 
            },
            {
              icon: <FaBuilding size={20} />, 
              title: "Create NGO",
              steps: [], 
            },
            {
              icon: <FaTachometerAlt size={20} />,
              title: "Dashboard",
              steps: [],
            },
            {
              icon: <FaBullhorn size={20} />, 
              title: "Campaign Management",
              steps: [],
            },
            {
              icon: <FaChartLine size={20} />, 
              title: "Analytics",
              steps: [], 
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
          * This software works with Attestations: An on-chain verification process that creates a permanent, transparent record of actions or information on the blockchain, ensuring accountability and traceability throughout the process from registering an NGO to uploading impact reports.
        </p>
      </div>
    </div>
  );
};

export default NGOFlowDiagram;
