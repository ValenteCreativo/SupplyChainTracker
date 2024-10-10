'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import Image from 'next/image'
import { QrReader } from 'react-qr-reader'
import { ExternalLink, BarChart2, MapPin, AlertTriangle } from 'lucide-react'

// This would be your actual contract ABI and address
const CONTRACT_ABI = [/* Your contract ABI here */]
const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS"

export default function Dashboard() {
  const [transactions, setTransactions] = useState([])
  const [isScanning, setIsScanning] = useState(false)
  const [formData, setFormData] = useState({
    entity: '',
    product: '',
    quantity: '',
    location: '',
    status: 'In Transit',
  })
  const [isConnected, setIsConnected] = useState(false)
  const [signer, setSigner] = useState(null)
  const [inventory, setInventory] = useState({})
  const [alerts, setAlerts] = useState([])
  const [analytics, setAnalytics] = useState({
    totalDonations: 0,
    totalDistributed: 0,
    efficiency: 0,
  })
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    connectWallet()
    fetchTransactions()
    fetchInventory()
    fetchAlerts()
    calculateAnalytics()
  }, [])

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        setSigner(signer)
        setIsConnected(true)
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      }
    } else {
      console.log('Please install MetaMask!')
    }
  }

  const fetchTransactions = async () => {
    // Implement fetching transactions from the blockchain
    // This is a placeholder for demonstration
    setTransactions([
      { id: 1, entity: 'Donation Center A', product: 'Water Bottles', quantity: 1000, location: 'New York', status: 'Received', timestamp: new Date().toISOString() },
      { id: 2, entity: 'Truck A', product: 'Water Bottles', quantity: 500, location: 'En route to NJ', status: 'In Transit', timestamp: new Date().toISOString() },
      { id: 3, entity: 'Distribution Center B', product: 'Water Bottles', quantity: 500, location: 'New Jersey', status: 'Distributed', timestamp: new Date().toISOString() },
    ])
  }

  const fetchInventory = async () => {
    // Implement fetching inventory from the blockchain
    // This is a placeholder for demonstration
    setInventory({
      'Water Bottles': 2000,
      'Blankets': 500,
      'First Aid Kits': 200,
    })
  }

  const fetchAlerts = async () => {
    // Implement fetching alerts from the blockchain or other data source
    // This is a placeholder for demonstration
    setAlerts([
      { id: 1, type: 'Low Stock', message: 'First Aid Kits running low at Distribution Center B' },
      { id: 2, type: 'Delay', message: 'Shipment to Location C delayed due to weather' },
    ])
  }

  const calculateAnalytics = async () => {
    // Implement calculation of analytics from blockchain data
    // This is a placeholder for demonstration
    setAnalytics({
      totalDonations: 5000,
      totalDistributed: 4500,
      efficiency: 90,
    })
  }

  const handleScan = async (data) => {
    if (data) {
      // Process the scanned QR code data
      console.log('Scanned data:', data)
      setIsScanning(false)
      // Implement the logic to submit this data to the blockchain
      // For demonstration, we'll add a mock transaction
      const newTransaction = {
        id: transactions.length + 1,
        entity: 'QR Scan',
        product: 'Scanned Item',
        quantity: 1,
        location: 'Scan Location',
        status: 'Received',
        timestamp: new Date().toISOString(),
      }
      setTransactions([...transactions, newTransaction])
    }
  }

  const handleError = (err) => {
    console.error(err)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    // Implement form submission to the blockchain
    console.log('Form submitted:', formData)
    // For demonstration, we'll add the form data as a new transaction
    const newTransaction = {
      id: transactions.length + 1,
      ...formData,
      timestamp: new Date().toISOString(),
    }
    setTransactions([...transactions, newTransaction])
    // Reset form after submission
    setFormData({ entity: '', product: '', quantity: '', location: '', status: 'In Transit' })
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-[#E6D0B8] p-4">
      <header className="flex justify-between items-center mb-8">
        <Image src="/logo.svg" alt="Logo" width={100} height={50} />
        <button
          onClick={connectWallet}
          disabled={isConnected}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isConnected ? 'Connected' : 'Connect Wallet'}
        </button>
      </header>

      <main className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Supply Chain Dashboard</h1>

        <div className="mb-8">
          <div className="flex border-b border-gray-200">
            {['overview', 'transactions', 'inventory', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-blue-500' : ''}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {Object.entries(analytics).map(([key, value]) => (
                <div key={key} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                  <p className="text-3xl font-bold">{typeof value === 'number' && key === 'efficiency' ? `${value}%` : value}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="bg-white p-4 rounded-lg shadow mt-4">
              <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
              <p className="mb-2">
                View recent supply chain transactions
                <a
                  href="https://base.easscan.org/attestations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center text-blue-600 hover:underline"
                >
                  View on EAS <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Entity</th>
                      <th className="px-4 py-2 text-left">Product</th>
                      <th className="px-4 py-2 text-left">Quantity</th>
                      <th className="px-4 py-2 text-left">Location</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="border-b">
                        <td className="px-4 py-2">{tx.entity}</td>
                        <td className="px-4 py-2">{tx.product}</td>
                        <td className="px-4 py-2">{tx.quantity}</td>
                        <td className="px-4 py-2">{tx.location}</td>
                        <td className="px-4 py-2">{tx.status}</td>
                        <td className="px-4 py-2">{new Date(tx.timestamp).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="bg-white p-4 rounded-lg shadow mt-4">
              <h2 className="text-xl font-bold mb-4">Current Inventory</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Product</th>
                      <th className="px-4 py-2 text-left">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(inventory).map(([product, quantity]) => (
                      <tr key={product} className="border-b">
                        <td className="px-4 py-2">{product}</td>
                        <td className="px-4 py-2">{quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-white p-4 rounded-lg shadow mt-4">
              <h2 className="text-xl font-bold mb-4">Supply Chain Analytics</h2>
              <div className="flex items-center justify-center h-64">
                <BarChart2 className="w-32 h-32 text-blue-500" />
                <p className="text-lg ml-4">Analytics visualization would go here</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">QR Code Scanner</h2>
            <p className="mb-4">Scan a QR code to attest a delivery</p>
            {isScanning ? (
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
              />
            ) : (
              <button
                onClick={() => setIsScanning(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Start Scanning
              </button>
            )}
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Manual Attestation</h2>
            <p className="mb-4">Submit an attestation manually</p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="entity" className="block mb-1">Entity</label>
                <input
                  id="entity"
                  name="entity"
                  value={formData.entity}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="product" className="block mb-1">Product</label>
                <input
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block mb-1">Quantity</label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="location" className="block mb-1">Location</label>
                <input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="status" className="block mb-1">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="Received">Received</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Distributed">Distributed</option>
                </select>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Submit Attestation
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold mb-4">Supply Chain Map</h2>
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
            <MapPin className="w-12 h-12  text-blue-500" />
            <p className="text-lg ml-4">Interactive map would go here</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Alerts and Notifications</h2>
          {alerts.map((alert) => (
            <div key={alert.id} className="mb-4 p-4 border-l-4 border-yellow-500 bg-yellow-100">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="font-semibold">{alert.type}</h3>
              </div>
              <p>{alert.message}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}