'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ethers } from 'ethers'
//import abi from '../path/to/your/abi.json' // Update with the correct path to your ABI

export default function LandingPage() {
  const [account, setAccount] = useState(null)
  const [provider, setProvider] = useState(null)
  const [contract, setContract] = useState(null)

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
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-[#E6D0B8]">
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-opacity-80 backdrop-blur-sm">
        <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN" alt="Logo" width={100} height={50} />
        <div className="flex items-center space-x-4">
          {!account ? (
            <button
              onClick={connectWallet}
              className="bg-[#8B4513] text-white px-4 py-2 rounded-full hover:bg-[#A0522D] transition-colors"
            >
              Connect Wallet
            </button>
          ) : (
            <p className="text-sm font-medium text-white">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
          )}
        </div>
      </header>

      <main>
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Supply Chain Tracker</h1>
            <p className="text-xl mb-8">
              Revolutionize your supply chain management with blockchain-powered attestations for effective altruism.
            </p>
            <button className="bg-[#8B4513] text-white px-6 py-3 rounded-full hover:bg-[#A0522D] transition-colors text-lg">
              Launch App
            </button>
            <div className="mt-12">
              <Image
                src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
                alt="Supply Chain"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Donation Center</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmWizUWwgErSt7QKdM5noaDXWmRRPN9erGuz3hH2NtmqMW" alt="Donation Center" width={500} height={300} className="rounded-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg">
                  Our app starts at the donation center, where goods are received and logged into the blockchain. This ensures that every item is accounted for from the very beginning, providing a transparent record of all donations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Delivery Bus</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="text-lg">
                  As goods are transported, our app tracks their movement in real-time. Delivery personnel can easily update the status of shipments, ensuring that all stakeholders have up-to-date information on the location and condition of the goods.
                </p>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmX6wKCTVjkgheTvBUemVb1bD3N2zDxExMGoxxM2Zqn1Qw" alt="Delivery Bus" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Distribution Center</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmQRMcX47ekqKht7iqutm5yD4Hy1d6GPo4fvvJ3sz6ik6x" alt="Distribution Center" width={500} height={300} className="rounded-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg">
                  At distribution centers, our app facilitates efficient inventory management and allocation of resources. Each transaction is recorded on the blockchain, creating an immutable record of how goods are distributed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Aid Recipients</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="text-lg">
                  Aid recipients benefit from the transparency our app provides. They can verify the source and quality of the goods they receive, knowing that everything is tracked and verified on the blockchain.
                </p>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmWLAdpMmHGFnUXiythaWoo9aTryYR8Lv4nV5HG2QsdBqK" alt="Aid Recipients" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}