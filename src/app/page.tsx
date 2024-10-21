'use client'

import { useState } from 'react'
import Image from 'next/image'
import MapboxMap from 'src/components/Landing-General/MapboxMap';
// import LeafletMap from 'src/components/Landing-General/LeafletMap'
import Link from 'next/link';

export default function LandingPage() {

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9]">
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
  
        <section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">What we resolve</h2>
    <div className="flex flex-col md:flex-row items-center fade-in">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmQHEFfrPaRe9NPnv5FWzM1GTvKZDUexySNbph7TjAzhAy" alt="Donation Center" width={500} height={300} className="rounded-lg" />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <p className="text-lg text-[#4A3F35] mb-4">
        We are transforming the way humanitarian aid is managed by focusing on the <strong className="text-[#558B6E]">infrastructure</strong> behind <strong className="text-[#558B6E]">supply chains for donations</strong> aimed at people in highly vulnerable situations, whether due to <strong className="text-[#558B6E]">climate disasters, armed conflicts, or simply humanitarian need</strong>. From start to finish, we ensure that these benefits and support funds are received <strong className="text-[#558B6E]">transparently, securely, and free from corruption through web3 technologies</strong>.
        </p>
        <p className="text-lg text-[#4A3F35] mb-4">
                  It's <strong className="text-[#558B6E]">urgent</strong> to <strong className="text-[#558B6E]">integrate NGOs and donors into Blockchain technology</strong>, and made its benefits available to their projects, for the sake of humanity and the planet, <strong className="text-[#558B6E]">providing full traceability and ownership of their impact data on a single platform.</strong>
                </p>
                <p className="text-lg text-[#4A3F35] mb-4">
                <strong className="text-[#558B6E]">Supply Cycle</strong> aims to be a <strong className="text-[#558B6E]">tool to foster trustful collaboration and peacebuilding</strong>.
                </p>
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-[#F1EDE9]">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Create your own Donation’s Cycle</h2>
    <div className="flex flex-col md:flex-row items-center fade-in">
      <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
        <p className="text-lg text-[#4A3F35] mb-4">
        Sign up with your <strong className="text-[#558B6E]">Smart Wallet</strong> as an <strong className="text-[#558B6E]">NGO</strong> or <strong className="text-[#558B6E]">Supplier</strong> and start a <strong className="text-[#558B6E]">Donation Cycle</strong>, managing the process completely free of intermediaries that might compromise the integrity of donations. This approach favors <strong className="text-[#558B6E]">transparency, traceability,</strong> and <strong className="text-[#558B6E]">total control of your data</strong>.
        </p>
        <p className="text-lg text-[#4A3F35] mb-4">
        As an NGO, you'll access a <strong className="text-[#558B6E]">dashboard</strong> where you can create <strong className="text-[#558B6E]">attestations</strong> to register your organization, launch and manage <strong className="text-[#558B6E]">Collection Campaigns</strong>, declare <strong className="text-[#558B6E]">Achieved Goals</strong>, and share your <strong className="text-[#558B6E]">Final Impact Report</strong>. Your <strong className="text-[#558B6E]">positioning, reputation,</strong> and <strong className="text-[#558B6E]">connection with the community</strong> on the platform will grow as you meet accountability mechanisms by completing your Donation Cycles.
                </p>
        <p className="text-lg text-[#4A3F35] mb-4">
        As a Supplier, you'll be able to search for active campaigns to join as a <strong className="text-[#558B6E]">donor</strong>, either through <strong className="text-[#558B6E]">financial contributions, in-kind donations,</strong> or <strong className="text-[#558B6E]">volunteering</strong>. You'll have the ability to <strong className="text-[#558B6E]">track, demand accountability,</strong> and <strong className="text-[#558B6E]">see metrics</strong> that show how your contributions, no matter how small, are genuinely making a positive impact. Your efforts will be part of a larger network aimed at <strong className="text-[#558B6E]">peacebuilding</strong>, ensuring that your support contributes to a global movement for positive change.
                </p>
        
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
        <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmeDSuoQBgJxd8fnsgozaDwK5bJty8mv5aySNeULdC81P1" alt="Delivery Bus" width={500} height={300} className="rounded-lg" />
      </div>
    </div>
  </div>
</section>

<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Collaboration & Recognition</h2>
    <div className="flex flex-col md:flex-row items-center fade-in">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmRppd3a3Zwf45oTfi5iw9XKqoFCK8KLX4ekWwNv8joP66" alt="Distribution Center" width={500} height={300} className="rounded-lg" />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <p className="text-lg text-[#4A3F35] mb-4">
          Our platform fosters a space for <strong className="text-[#558B6E]">collaboration and discussion</strong> through an interactive <strong className="text-[#558B6E]">forum</strong>, where NGOs, donors, and suppliers can explore <strong className="text-[#558B6E]">mechanisms for building and improving projects</strong>. This forum encourages open communication, allowing users to exchange ideas, form strategic partnerships, and create agreements based on <strong className="text-[#558B6E]">attestations</strong>.
        </p>
        <p className="text-lg text-[#4A3F35] mb-4">
          As part of our initiative to incentivize positive impact, we’ve integrated features like the <strong className="text-[#558B6E]">Talent Passport</strong>, where you can track your <strong className="text-[#558B6E]">Builder Score</strong> and showcase your contributions. Suppliers and donors can share their involvement on <strong className="text-[#558B6E]">Farcaster</strong> and other social networks, helping raise awareness about their efforts and the causes they support.
        </p>
        <p className="text-lg text-[#4A3F35] mb-4">
          We aim to establish <strong className="text-[#558B6E]">strategical alliances</strong> with friends from Web 3 projects to implement <strong className="text-[#558B6E]">reward mechanisms</strong> in the future, recognizing users' contributions through tangible and measurable impact rewards. These could include benefits like reputation boosts, exclusive content, or even potential financial incentives, encouraging a sustainable and collaborative ecosystem.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-[#F1EDE9]">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Our technologies</h2>
    <div className="flex flex-col md:flex-row items-center fade-in">
      <div className="md:w-1/2 mb-8 md:mb-0 order-2"> 
        <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmfZku3tRmPfpnMXxPpyPUTmyFLuAb9KBTKvQXs6J7nmZ2" alt="Aid Recipients" width={500} height={300} className="rounded-lg" />
      </div>
      <div className="md:w-1/2 md:pl-8 order-1">
        <p className="text-lg text-[#4A3F35]">
          Our software operates through <strong className="text-[#558B6E]">Attestations</strong> running on the <strong className="text-[#558B6E]">Base Blockchain network</strong>, ensuring speed, security, and affordable transaction fees. With this mechanism, users can overview and verify the status of the Donation Cycle in real-time, with immutability, transparency, and traceability, guaranteeing <strong className="text-[#558B6E]">trust and confidence throughout the entire process.</strong>
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-20" style={{ background: 'linear-gradient(135deg, #F8F4EC 0%, #D4EAD5 40%, #C2DFE3 70%, #F8F4EC 100%)' }}>
  <div className="container mx-auto px-4">
    <h2 className="text-5xl font-extrabold text-center text-[#6C5A49] mb-12 tracking-wide leading-tight">
      The secret to <span className="text-[#83A598]">Effective Altruism’s</span> success is 
      <span className="text-[#558B6E]"> trust </span> 
      and <span className="text-[#558B6E]"> reliability </span> at every step. 
      <span className="text-[#83A598]"> 🌿</span>
    </h2>
  </div>
</section>

<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Roadmap</h2>
    <div className="flex flex-col md:flex-row items-center fade-in">
      <div className="md:w-1/2 mb-8 md:mb-0 order-1">
        <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmYNNP47nEn8uHb4bPwvgK7HLoagTqUCYxvxxJmB5iAr9j" alt="Roadmap Image" width={500} height={300} className="rounded-lg" />
      </div>
      <div className="md:w-1/2 md:pl-8 order-2">
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <strong className="text-[#558B6E]">Oct 2024 - Buildathon Base:</strong>
            <p className="text-lg text-[#4A3F35]">Deliver a functional demo as a proof of concept, showcasing the key features of the platform.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <strong className="text-[#558B6E]">Dec 2024 - Development Phase:</strong>
            <p className="text-lg text-[#4A3F35]">Begin the creation of a beta version, integrating user-generated data to test and refine the core functionalities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <strong className="text-[#558B6E]">Q1 2025 - Deployment Phase:</strong>
            <p className="text-lg text-[#4A3F35]">Official software launch, gathering feedback from early users to enhance and improve the platform.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <strong className="text-[#558B6E]">Q2 2025 - Marketing & Promotion:</strong>
            <p className="text-lg text-[#4A3F35]">Forge strategic alliances with Web3 projects to promote a network that incentivizes user participation and fosters growth.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <strong className="text-[#558B6E]">Q3 2025 - Optimization & Feature Upgrades:</strong>
            <p className="text-lg text-[#4A3F35]">Continuously optimize the platform by adding new features and functionalities, making it more user-friendly and powerful.</p>
          </div>
        </div>
      </div>
    </div>
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