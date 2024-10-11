'use client'

import { useState } from 'react'
import Image from 'next/image'
import LeafletMap from '../components/LeafletMap'
import Link from 'next/link';

export default function LandingPage() {
  const [account, setAccount] = useState(null)

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('MetaMask is required to connect!')
      return
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setAccount(accounts[0])
    } catch (error) {
      console.error('Error connecting wallet:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md">
        <Image
          src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
          alt="Logo"
          width={100}
          height={50}
        />
        <div className="flex items-center space-x-4">
          {!account ? (
            <button
              onClick={connectWallet}
              className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Connect Wallet
            </button>
          ) : (
            <p className="text-sm font-medium text-[#A48460]">
              Connected: {account.slice(0, 6)}...{account.slice(-4)}
            </p>
          )}
        </div>
      </header>
  
      {/* Main content */}
      <main className="pt-32 pb-12"> {/* Ajuste de padding superior e inferior */}
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[url('https://coral-near-warbler-359.mypinata.cloud/ipfs/QmRdf3ABd6Ep6mzReuoHQZrrq6cRHqeA7qxRcUw5LmNLs')] bg-cover bg-center">
          <div className="container mx-auto px-4 text-center text-[#4A3F35] space-y-8"> {/* Añadí más espacio entre los elementos */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
              Supply Cycle
            </h1>
            <p className="text-2xl mb-8 max-w-2xl mx-auto">
            A tool designed to help NGOs ensure transparency and traceability in their donation supply chains, fostering donor trust and strengthening the humanitarian aid ecosystem.
            </p>
            <Link href="/dashboard" passHref>
              <button className="bg-[#A48460] text-white px-8 py-3 rounded-full hover:bg-[#8F6C4E] transition-colors text-lg shadow-xl mt-16">
                Launch App
              </button>
            </Link>
  
            {/* Map Section */}
            <div className="mt-12 w-full max-w-3xl mx-auto z-10 relative rounded-lg shadow-lg bg-white bg-opacity-80 p-6 backdrop-blur-sm"> {/* Ajusté el tamaño y apariencia del mapa */}
              <LeafletMap className="rounded-lg shadow-lg" style={{ width: '100%', height: '300px' }} />
              <p className="mt-4 text-left text-sm text-gray-700">
  <strong>Semilla Azul A.C.</strong> is sending donations from their recollection center in <strong> Mexico City</strong> to a distribution center in <strong>Acapulco, Guerrero</strong>. Last updated: October 11, 2024, 2:45 PM.
  <br />
  Order status: In transit. Estimated arrival: October 12, 2024, 10:00 AM.
  <br />
  Quantity: 50 boxes of supplies. Quality: Verified.
</p>
            </div>
          </div>
        </section>

       {/* Sección 1: Donation Center */}
       <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Donation Center</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmQHEFfrPaRe9NPnv5FWzM1GTvKZDUexySNbph7TjAzhAy" alt="Donation Center" width={500} height={300} className="rounded-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg text-[#4A3F35]">
                  Every donation is recorded and tracked on the blockchain from the moment it arrives, ensuring full transparency and accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 2: Delivery Bus */}
        <section className="py-20 bg-[#F1EDE9]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Real-Time Tracking for Maximum Impact</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="text-lg text-[#4A3F35]">
                  Our cutting-edge tracking system revolutionizes aid distribution. Donors, recipients, and stakeholders can monitor the journey of goods in real-time, fostering trust and ensuring resources reach those in need efficiently. Embrace the power of blockchain for seamless, transparent logistics.
                </p>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmeDSuoQBgJxd8fnsgozaDwK5bJty8mv5aySNeULdC81P1" alt="Delivery Bus" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3: Distribution Center */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Efficient Resource Allocation</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmRppd3a3Zwf45oTfi5iw9XKqoFCK8KLX4ekWwNv8joP66" alt="Distribution Center" width={500} height={300} className="rounded-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg text-[#4A3F35]">
                  Leverage blockchain-powered inventory management for unparalleled efficiency. Our system ensures optimal resource allocation with an immutable record of all transactions. Streamline your operations, reduce waste, and maximize the impact of every donation in your community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 4: Aid Recipients */}
        <section className="py-20 bg-[#F1EDE9]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#A48460] mb-12">Empowering Aid Recipients</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="text-lg text-[#4A3F35]">
                  Our blockchain-based system adds an extra layer of trust and accountability. Recipients can easily verify the origin and quality of their aid, ensuring fair distribution and building confidence in the entire process. Experience the future of humanitarian assistance with our innovative onchain solution.
                </p>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmfZku3tRmPfpnMXxPpyPUTmyFLuAb9KBTKvQXs6J7nmZ2" alt="Aid Recipients" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-extrabold mb-8">Building a Better World Onchain</h2>
            <p className="text-lg mb-8">
              The Supply Chain Tracker is revolutionizing the decentralized economy by providing unparalleled transparency and traceability in supply chains. Our platform fosters trust between donors, recipients, and stakeholders, addressing critical needs in your local community and beyond.
            </p>
            <p className="text-lg mb-8">
              By leveraging the power of Base network and integrating Talent Protocol, we're not just creating a scalable, blockchain-backed solution - we're building a reputation system for providers and strategic allies. This innovation streamlines costs, enhances administrative processes, and showcases the boundless potential of decentralized technologies in real-world applications.
            </p>
            <p className="text-lg">
              Join us in creating a future where every donation makes a measurable impact, and every stakeholder is empowered by the transparency of blockchain technology.
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