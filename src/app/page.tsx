'use client'

import { useState } from 'react'
import Image from 'next/image'
import MapboxMap from 'src/components/Landing-General/MapboxMap';
// import LeafletMap from 'src/components/Landing-General/LeafletMap'
import Link from 'next/link';

export default function LandingPage() {

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md">
        <Image
          src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
          alt="Logo"
          width={100}
          height={50}
        />
        <div className="flex items-center space-x-4">
          <Link href="/Home" passHref>
            <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Launch App
            </button>
          </Link>
        </div>
      </header>
  
      {/* Main content */}
      <main className="pt-32 pb-12">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[url('https://coral-near-warbler-359.mypinata.cloud/ipfs/QmRdf3ABd6Ep6mzReuoHQZrrq6cRHqeA7qxRcUw5LmNLs')] bg-cover bg-center">
          <div className="container mx-auto px-4 text-center text-[#4A3F35] space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
              Supply Cycle
            </h1>
            <p className="text-1xl mb-8 max-w-2xl mx-auto">
              Leveraging Base, attestations, and blockchain technology to transform the NGO supply chain. We ensure transparency, accountability, and real-time tracking of donations from start to finish, empowering humanitarian efforts with the reliability of Web3.
            </p>
            <Link href="/Home" passHref>
              <button className="bg-[#A48460] text-white px-8 py-3 rounded-full hover:bg-[#8F6C4E] transition-colors text-lg shadow-xl mt-16">
                Launch App
              </button>
            </Link>
  
            <div className="mt-12 w-full max-w-3xl mx-auto z-10 relative rounded-lg shadow-lg bg-white bg-opacity-80 p-6 pb-2 backdrop-blur-sm h-auto max-h-[600px] overflow-y-auto">
  <MapboxMap />
  <p className="mt-4 text-left text-sm text-gray-700">
    <strong>Semilla Azul A.C.</strong> is delivering donations from <strong>Mexico City</strong> to <strong>Acapulco, Guerrero</strong>. Last update: October 16, 2024, 2:45 PM.
    <br />
    Status: In transit. Estimated arrival: October 18, 2024, 10:00 AM.
    <br />
    Supplies: 50 verified boxes.
    <br />
    <a 
      href="https://base-sepolia.easscan.org/attestation/view/0x0e8c8a4d811e0962672261697e11fda898ca0857b81a22247f8c535778533dd7"
      className="text-blue-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Explore <b>semillaazul.base.eth</b> Impact Report Attestations on the Blockchain
    </a>
  </p>
</div>
           
          </div>
        </section>
  
        {/* Section 1: Attestations and Base-Powered Donation Center */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Base and Attestations for Full Transparency</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmQHEFfrPaRe9NPnv5FWzM1GTvKZDUexySNbph7TjAzhAy" alt="Donation Center" width={500} height={300} className="rounded-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg text-[#4A3F35]">
                  We leverage the power of Base and attestations to record every action in the donation lifecycle on the blockchain. Our platform provides full transparency, allowing donors to verify the journey of their donations from the donation center to the recipient, and ensuring accountability every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Section 2: Talent and Real-Time Tracking */}
        <section className="py-20 bg-[#F1EDE9]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Talent and Real-Time Tracking</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="text-lg text-[#4A3F35]">
                  Our platform integrates with Talent passport (Reputation attestation protocol), ensuring that all actors within the donation cycle are verified and trustworthy. Real-time tracking allows donors, recipients, and NGOs to view the status of shipments, creating a transparent and efficient ecosystem that maximizes the impact of humanitarian efforts.
                </p>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmeDSuoQBgJxd8fnsgozaDwK5bJty8mv5aySNeULdC81P1" alt="Delivery Bus" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
  
        {/* Section 3: Secure Blockchain-Powered Distribution */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Secure Blockchain-Powered Distribution</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmRppd3a3Zwf45oTfi5iw9XKqoFCK8KLX4ekWwNv8joP66" alt="Distribution Center" width={500} height={300} className="rounded-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg text-[#4A3F35]">
                  By using Base and blockchain technology, Supply Cycle ensures secure and reliable distribution of donations. Every action, from receiving to delivery, is recorded immutably, preventing fraud, theft, or waste. This technology creates a system of trust and efficiency in even the most challenging environments.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Section 4: Empowering Aid Recipients with Blockchain */}
        <section className="py-20 bg-[#F1EDE9]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Empowering Aid Recipients</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="text-lg text-[#4A3F35]">
                  Recipients can verify the authenticity and condition of the donations they receive through blockchain-based attestations. This system ensures that aid reaches the intended recipients and that every transaction is accountable. Blockchain empowers recipients with transparency and trust.
                </p>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmfZku3tRmPfpnMXxPpyPUTmyFLuAb9KBTKvQXs6J7nmZ2" alt="Aid Recipients" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
  
        {/* Section 5: Why Supply Cycle Matters */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Why Supply Cycle Matters</h2>
            <p className="text-lg max-w-4xl mx-auto">
              During this hackathon, we set out to transform the way the world handles humanitarian aid. Using cutting-edge technologies like Base, blockchain attestations, and real-time tracking, Supply Cycle brings unprecedented transparency, trust, and efficiency to the donation process. Our solution empowers NGOs, donors, and recipients alike, ensuring that every donation makes the impact it was intended for.
            </p>
          </div>
        </section>
      </main>
  

      <footer className="bg-[#4A3F35] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>From México with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">Github</a></p>
        </div>
      </footer>
    </div>
  )
}