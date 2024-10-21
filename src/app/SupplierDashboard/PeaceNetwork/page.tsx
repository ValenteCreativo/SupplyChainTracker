'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAttestations } from '@coinbase/onchainkit/identity';
import { base } from 'viem/chains';

type Attestation = {
  id: string;
  schemaId: string;
  [key: string]: any;
};

type EASSchemaUid = `0x${string}`;

const SCHEMA_DETAILS = [
  { id: '0xbe316d1b4853bff8f96d3addef2aaaada363d29e7a04fbf3888278d696752616', title: 'NGO Registration', description: 'Registration of Non-Governmental Organizations to guarantee their authenticity.' },
  { id: '0xeff691af0f7bb45f8a061eaa59933e6aca6d151854289ed5c2e0edec5906d71a', title: 'Create Campaigns', description: 'Campaigns created for different causes, verified for their legitimacy.' },
  { id: '0x3a4a26b258d8728a2d6b0637f196f619258118459aa045ff9dfa36f551bc573a', title: 'Milestones', description: 'Achievements reached in various campaigns and projects.' },
  { id: '0x3c2ff9d1a9fb8a66a0c004c7de73e3ab856349da2cc3e1075018caab7ce8a112', title: 'Supply Chain', description: 'Transparency in the supply chain to enhance traceability.' },
  { id: '0xcd9c6546143490a60815860fe7103efcbc906853d6d96969b6bfc03dcb1d2900', title: 'Impact Report', description: 'Social and environmental impact reports.' },
];

const PeaceNetwork: React.FC = () => {
  const [attestations, setAttestations] = useState<Attestation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAttestations = async () => {
    try {
      const attestationsOptions = {
        schemas: SCHEMA_DETAILS.map(schema => schema.id) as EASSchemaUid[],
        revoked: false,
        limit: 50,
      };
      const results = await getAttestations('0x4148071e56deEabFD9C2037b3131a55b0f1E9c9a', base, attestationsOptions);
      setAttestations(results);
    } catch (err) {
      setError('Error fetching attestations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttestations();
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
      
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md">
        <Link href="/" passHref>
          <Image
            src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
            alt="Logo"
            width={100}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/SupplierDashboard" passHref>
            <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Back
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-grow p-8 space-y-8 pt-32">
        <section className="container mx-auto px-4 space-y-8">
          <h1 className="text-3xl font-bold text-center text-[#4A3F35]">Peace Network Attestations</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SCHEMA_DETAILS.map((schema) => (
              <div key={schema.id} className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-[#4A3F35]">{schema.title}</h2>
                <p className="text-center text-gray-600 mb-6">{schema.description}</p>
                <div className="flex-grow w-full">
                  {attestations.filter(att => att.schemaId === schema.id).length > 0 ? (
                    attestations
                      .filter(att => att.schemaId === schema.id)
                      .map((attestation) => (
                        <div key={attestation.id} className="bg-[#E8E2D9] p-4 rounded-md mb-2">
                          <p className="text-sm"><strong>ID:</strong> {attestation.id}</p>
                          <p className="text-sm"><strong>Data:</strong> {JSON.stringify(attestation.data)}</p>
                        </div>
                      ))
                  ) : (
                    <p className="text-sm text-gray-500">No attestations found for this schema.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#4A3F35] text-white py-8 mt-16 w-full flex-shrink-0">
        <div className="container mx-auto text-center">
          <p>From Mexico with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">Github</a></p>
        </div>
      </footer>
    </div>
  );
};

export default PeaceNetwork;
