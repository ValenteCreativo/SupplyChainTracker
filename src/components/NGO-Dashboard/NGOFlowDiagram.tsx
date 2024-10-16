import React from 'react';

const NGOFlowDiagram: React.FC = () => {
  return (
    <div className="w-full p-5">
      <div className="max-w-[5000px] w-[95%] p-5 rounded-lg shadow-md">
        <h1 className="text-[#A48460] text-center mb-8 text-4xl font-bold">Supply Cycle - NGO User Flow</h1>
        <div className="flex justify-between items-start overflow-x-auto pb-5">
          {[
            {
              title: "1. NGO tooling page",
              steps: ["Login"]
            },
            {
              title: "2. Register",
              steps: ["Create or login with Smart Wallet", "Fill NGO information*"]
            },
            {
              title: "3. NGO Dashboard",
              steps: ["Create campaigns*", "Manage campaigns"]
            },
            {
              title: "4. Campaign Management",
              steps: ["Attest milestones*", "Use Supply Chain tools*"]
            },
            {
              title: "5. Campaign Completion",
              steps: ["Upload impact report*", "Review results"]
            }
          ].map((step, index, array) => (
            <div key={index} className="bg-[#F1EDE9] border-2 border-[#A48460] rounded-lg p-4 m-2 w-48 text-center relative flex-shrink-0">
              <div className="font-bold mb-2 text-[#A48460]">{step.title}</div>
              {step.steps.map((subStep, subIndex) => (
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
          * This software works with Attestations: An on-chain verification process that creates a permanent, transparent record of actions or information on the blockchain, ensuring accountability and traceability throughout the process from registering and NGO to uploading impact reports.
        </p>
      </div>
    </div>
  );
};

export default NGOFlowDiagram;
