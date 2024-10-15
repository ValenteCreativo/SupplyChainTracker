import React from 'react';

const BaseInteractivity: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Blockchain Verification</h3>
      <p className="text-sm text-gray-700">
        Verify your donations on the Base blockchain and track how funds were distributed.
      </p>
      {/* Placeholder for blockchain interaction */}
      <div className="mt-4">
        {/* Button to interact with Base blockchain */}
        <button className="bg-[#39B54A] text-white py-2 px-4 rounded-lg hover:bg-[#2a9e3f]">
          Verify on Blockchain
        </button>
      </div>
    </div>
  );
};

export default BaseInteractivity;
