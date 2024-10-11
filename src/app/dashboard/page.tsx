'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import Image from 'next/image'
import { QrReader } from 'react-qr-reader'
import { ExternalLink, BarChart2, MapPin, AlertTriangle, Package, Truck, Users, Activity } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

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
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    connectWallet()
    fetchTransactions()
    fetchInventory()
    fetchAlerts()
    calculateAnalytics()
    generateChartData()
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
    // Placeholder for fetching transactions from the blockchain
    setTransactions([
      { id: 1, entity: 'Donation Center A', product: 'Water Bottles', quantity: 1000, location: 'New York', status: 'Received', timestamp: new Date().toISOString() },
      { id: 2, entity: 'Truck A', product: 'Water Bottles', quantity: 500, location: 'En route to NJ', status: 'In Transit', timestamp: new Date().toISOString() },
      { id: 3, entity: 'Distribution Center B', product: 'Water Bottles', quantity: 500, location: 'New Jersey', status: 'Distributed', timestamp: new Date().toISOString() },
    ])
  }

  const fetchInventory = async () => {
    // Placeholder for fetching inventory from the blockchain
    setInventory({
      'Water Bottles': 2000,
      'Blankets': 500,
      'First Aid Kits': 200,
    })
  }

  const fetchAlerts = async () => {
    // Placeholder for fetching alerts
    setAlerts([
      { id: 1, type: 'Low Stock', message: 'First Aid Kits running low at Distribution Center B' },
      { id: 2, type: 'Delay', message: 'Shipment to Location C delayed due to weather' },
    ])
  }

  const calculateAnalytics = async () => {
    // Placeholder for analytics calculations
    setAnalytics({
      totalDonations: 5000,
      totalDistributed: 4500,
      efficiency: 90,
    })
  }

  const generateChartData = () => {
    const data = [
      { name: 'Jan', donations: 4000, distributions: 2400 },
      { name: 'Feb', donations: 3000, distributions: 1398 },
      { name: 'Mar', donations: 2000, distributions: 9800 },
      { name: 'Apr', donations: 2780, distributions: 3908 },
      { name: 'May', donations: 1890, distributions: 4800 },
      { name: 'Jun', donations: 2390, distributions: 3800 },
    ]
    setChartData(data)
  }

  const handleScan = async (data) => {
    if (data) {
      console.log('Scanned data:', data)
      setIsScanning(false)
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
    const newTransaction = {
      id: transactions.length + 1,
      ...formData,
      timestamp: new Date().toISOString(),
    }
    setTransactions([...transactions, newTransaction])
    setFormData({ entity: '', product: '', quantity: '', location: '', status: 'In Transit' })
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8E1B9] to-[#E5C095] p-6">
      <header className="flex justify-between items-center mb-8">
        <Image src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN" alt="Logo" width={100} height={50} />
        <button
          onClick={connectWallet}
          disabled={isConnected}
          className="bg-[#C68E17] text-white px-4 py-2 rounded hover:bg-[#A67510] transition-colors disabled:bg-gray-400"
        >
          {isConnected ? 'Connected' : 'Connect Wallet'}
        </button>
      </header>

      <main className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#6E2C00] mb-8">Dashboard</h1>

        <div className="mb-8">
          <div className="flex border-b border-[#B5651D]">
            {['overview', 'transactions', 'inventory', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 text-[#8B4513] ${activeTab === tab ? 'border-b-4 border-[#C68E17]' : ''}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg flex items-center">
                  <Package className="w-12 h-12 text-[#C68E17] mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#8B4513]">Total Donations</h3>
                    <p className="text-3xl font-bold text-[#C68E17]">{analytics.totalDonations}</p>
                  </div>
                </div>
                <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg flex items-center">
                  <Truck className="w-12 h-12 text-[#C68E17] mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#8B4513]">Total Distributed</h3>
                    <p className="text-3xl font-bold text-[#C68E17]">{analytics.totalDistributed}</p>
                  </div>
                </div>
                <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg flex items-center">
                  <Users className="w-12 h-12 text-[#C68E17] mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#8B4513]">Beneficiaries</h3>
                    <p className="text-3xl font-bold text-[#C68E17]">1,234</p>
                  </div>
                </div>
                <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg flex items-center">
                  <Activity className="w-12 h-12 text-[#C68E17] mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#8B4513]">Efficiency</h3>
                    <p className="text-3xl font-bold text-[#C68E17]">{analytics.efficiency}%</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Donations vs Distributions</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="donations" stroke="#C68E17" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="distributions" stroke="#8B4513" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg mt-6">
              <h2 className="text-2xl font-bold mb-4 text-[#8B4513]">Recent Transactions</h2>
              <p className="mb-2 text-[#6E2C00]">
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
                    <tr className="bg-[#FFE1C4]">
                      <th className="px-4 py-2 text-left text-[#6E2C00]">Entity</th>
                      <th className="px-4 py-2 text-left text-[#6E2C00]">Product</th>
                      <th className="px-4 py-2 text-left text-[#6E2C00]">Quantity</th>
                      <th className="px-4 py-2 text-left text-[#6E2C00]">Location</th>
                      <th className="px-4 py-2 text-left text-[#6E2C00]">Status</th>
                      <th className="px-4 py-2 text-left text-[#6E2C00]">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="border-b border-[#B5651D]">
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
            <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg mt-6">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-6">Current Inventory</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-[#FFE1C4]">
                      <th className="px-6 py-3 text-left text-[#6E2C00]">Product</th>
                      <th className="px-6 py-3 text-left text-[#6E2C00]">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(inventory).map(([product, quantity]) => (
                      <tr key={product} className="border-b border-[#B5651D]">
                        <td className="px-6 py-3 text-[#8B4513]">{product}</td>
                        <td className="px-6 py-3 text-[#8B4513]">{quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === 'analytics' && (
            <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg mt-6">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-6">Supply Chain Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Donations vs Distributions</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="donations" stroke="#C68E17" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="distributions" stroke="#8B4513" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Top Performing Providers</h3>
                  <ul className="space-y-2">
                    {[
                      { name: 'Provider A', rating: 4.8 },
                      { name: 'Provider B', rating: 4.7 },
                      { name: 'Provider C', rating: 4.5 },
                      { name: 'Provider D', rating: 4.3 },
                      { name: 'Provider E', rating: 4.2 },
                    ].map((provider, index) => (
                      <li key={index} className="flex items-center justify-between bg-[#FFE1C4] p-3 rounded">
                        <span className="font-medium text-[#6E2C00]">{provider.name}</span>
                        <span className="text-[#C68E17]">★ {provider.rating.toFixed(1)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-6">QR Code Scanner</h2>
              <p className="text-[#6E2C00] mb-6">Scan a QR code to attest a delivery</p>
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
                  className="bg-[#C68E17] text-white px-6 py-3 rounded hover:bg-[#A67510] transition-colors"
                >
                  Start Scanning
                </button>
              )}
            </div>

            <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#8B4513] mb-6">Manual Attestation</h2>
              <p className="text-[#6E2C00] mb-6">Submit an attestation manually</p>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="entity" className="block text-[#8B4513] mb-2">Entity</label>
                  <input
                    id="entity"
                    name="entity"
                    value={formData.entity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[#C68E17] rounded text-[#6E2C00]"
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-[#8B4513] mb-2">Product</label>
                  <input
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[#C68E17] rounded text-[#6E2C00]"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-[#8B4513] mb-2">Quantity</label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[#C68E17] rounded text-[#6E2C00]"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-[#8B4513] mb-2">Location</label>
                  <input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[#C68E17] rounded text-[#6E2C00]"
                  />
                </div>
                <div>
                  <label htmlFor="status" className="block text-[#8B4513] mb-2">Status</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-[#C68E17] rounded text-[#6E2C00]"
                  >
                    <option value="Received">Received</option>
                    <option value="In Transit">In Transit</option>
                    <option value="Distributed">Distributed</option>
                  </select>
                </div>
                <button type="submit" className="bg-[#C68E17] text-white px-6 py-3 rounded hover:bg-[#A67510] transition-colors">
                  Submit Attestation
                </button>
              </form>
            </div>
          </div>

          <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold text-[#8B4513] mb-6">Supply Chain Map</h2>
            <div className="flex items-center justify-center h-64 bg-[#FFE1C4] rounded-lg">
              <MapPin className="w-16 h-16 text-[#C68E17]" />
              <p className="text-lg text-[#6E2C00] ml-6">Interactive map would go here</p>
            </div>
          </div>

          <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold text-[#8B4513] mb-6">Alerts and Notifications</h2>
            {alerts.map((alert) => (
              <div key={alert.id} className="mb-6 p-6 border-l-4 border-[#C68E17] bg-[#FFE1C4]">
                <div className="flex items-center">
                  <AlertTriangle className="h-8 w-8 text-[#C68E17] mr-4" />
                  <h3 className="font-semibold text-[#8B4513]">{alert.type}</h3>
                </div>
                <p className="text-[#6E2C00] mt-2">{alert.message}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#FDF0D5] p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold text-[#8B4513] mb-6">Provider Ratings</h2>
            <p className="text-[#6E2C00] mb-4">Rate the performance of service providers in the supply chain</p>
            <div className="space-y-4">
              {['Provider A', 'Provider B', 'Provider C'].map((provider, index) => (
                <div key={index} className="flex items-center justify-between bg-[#FFE1C4] p-4 rounded">
                  <span className="font-medium text-[#6E2C00]">{provider}</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} className="text-2xl text-[#C68E17] focus:outline-none">
                        ★
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}