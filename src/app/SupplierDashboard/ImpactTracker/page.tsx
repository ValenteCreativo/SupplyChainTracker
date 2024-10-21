'use client'

import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { ChartContainer } from "src/components/UI/charts"
import { Card, CardContent, CardHeader, CardTitle } from "src/components/UI/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/UI/Tabs"
import { Progress } from "src/components/UI/Progress"
import { Button } from "src/components/UI/button"
import { Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SharePopup from 'src/components/Supplier-Dashboard/SharePopup'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const ImpactTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const impactText = "Check out the amazing impact I've made through donations and volunteering! @ https://supplycycle.netlify.app/";

  // Datos de donación actualizados
  const donationData = [
    { name: "Monetary", value: 6000 },
    { name: "In-Kind", value: 2500 },
    { name: "Volunteering", value: 150 }, // Horas realistas
  ]

  // Datos de campañas actualizados con nombres más realistas y métricas de progreso
  const campaignData = [
    { name: "Semilla Azul A.C.", monetary: 5000, inKind: 2000, volunteering: 40, progress: 80 }, 
    { name: "Huellas Verdes", monetary: 4000, inKind: 3000, volunteering: 30, progress: 65 }, 
    { name: "Futuro Luminoso", monetary: 3500, inKind: 2000, volunteering: 20, progress: 90 },
  ]

  const evidenceLinks = [
    { ngo: "Semilla Azul A.C.", campaign: "Agua para Todos", link: "#", impactReport: "Impact Report 2023" },
    { ngo: "Huellas Verdes", campaign: "Educación Inclusiva", link: "#", impactReport: "Impact Report 2023" },
    { ngo: "Futuro Luminoso", campaign: "Reforestación Nacional", link: "#", impactReport: "Impact Report 2023" },
  ]

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-[#42A5F5] bg-opacity-90 backdrop-blur-lg shadow-md w-full">
        <Link href="/" passHref>
          <Image
            src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
            alt="Logo"
            width={100}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Title centered */}
        <h1 className="text-3xl font-bold text-center text-[#4A3F35] absolute left-1/2 transform -translate-x-1/2">
          Impact Tracker
        </h1>

        <div className="flex items-center space-x-4">
          <Link href="/SupplierDashboard" passHref>
            <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Dashboard
            </button>
          </Link>
        </div>
      </header>

      {/* Padding-top to avoid header overlapping the tabs */}
      <main className="flex-grow p-4 md:p-8 space-y-8 pt-[120px] md:pt-[140px] flex flex-col">
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="evidence">Evidence</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Your Impact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Pie Chart for donations */}
                  <ChartContainer className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={donationData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {donationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Campaign Progress Card with Bar Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer className="h-[300px]">
                    <ResponsiveContainer>
                      <BarChart data={campaignData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="progress" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Campaigns Tab */}
          <TabsContent value="campaigns">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {campaignData.map((campaign, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{campaign.name}</CardTitle>
                    <p className="text-sm text-gray-500">Monetary: ${campaign.monetary.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">In-Kind: ${campaign.inKind.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Volunteering: {campaign.volunteering} hours</p>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="mt-4">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Evidence Tab */}
          <TabsContent value="evidence">
            <Card>
              <CardHeader>
                <CardTitle>Evidence of Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {evidenceLinks.map((evidence, index) => (
                    <li key={index}>
                      <p className="font-semibold">{evidence.ngo}</p>
                      <p>{evidence.campaign}</p>
                      <Link href={evidence.link} className="text-blue-500 hover:underline">
                        View Impact Report
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Small Share Your Impact Card */}
        <div className="mt-auto w-full">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle>Share Your Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Share the difference you're making with your community on social media!
              </p>
              <div className="flex items-center space-x-4">
                <SharePopup userImpact={impactText} />
                <Button variant="outline" className="flex items-center">
                  Share via Farcaster
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#4A3F35] text-white py-8 mt-16 w-full flex-shrink-0">
        <div className="container mx-auto text-center">
          <p>From Mexico with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">GitHub</a></p>
        </div>
      </footer>
    </div>
  )
}

export default ImpactTracker
