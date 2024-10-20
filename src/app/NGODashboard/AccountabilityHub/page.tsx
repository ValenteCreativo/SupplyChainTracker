'use client'

import React from 'react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/UI/Tabs"
import { Card, CardContent, CardHeader, CardTitle } from "src/components/UI/card"
import CampaignHistoryList from 'src/components/NGO-Dashboard/CampaignHistoryList'
import ImpactScoreGraph from 'src/components/NGO-Dashboard/ImpactScoreGraph'
import ReputationChart from 'src/components/NGO-Dashboard/ReputationChart'
import Image from 'next/image'

const CampaignHistory: React.FC = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
        <Link href="/" passHref>
          <Image
            src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
            alt="Logo"
            width={100}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Título centrado */}
        <h1 className="text-3xl font-bold text-center text-[#4A3F35] absolute left-1/2 transform -translate-x-1/2">
          Historical Campaign Analytics
        </h1>

        <div className="flex items-center space-x-4">
          <Link href="/NGODashboard" passHref>
            <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Dashboard
            </button>
          </Link>
        </div>
      </header>

      {/* Ajuste de padding-top responsivo */}
      <main className="flex-grow p-4 md:p-8 space-y-8 pt-[120px] md:pt-[140px]">
        <Tabs defaultValue="campaigns" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="impact">Impact Score</TabsTrigger>
            <TabsTrigger value="reputation">Reputation</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns">
            <Card>
              <CardHeader>
                <CardTitle>Campaign History</CardTitle>
              </CardHeader>
              <CardContent>
                <CampaignHistoryList />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="impact">
            <Card>
              <CardHeader>
                <CardTitle>Impact Score</CardTitle>
              </CardHeader>
              <CardContent>
                <ImpactScoreGraph />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reputation">
            <Card>
              <CardHeader>
                <CardTitle>Reputation Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <ReputationChart />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-[#4A3F35] text-white py-8 mt-16 w-full flex-shrink-0">
        <div className="container mx-auto text-center">
          <p>From México with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">Github</a></p>
        </div>
      </footer>
    </div>
  )
}

export default CampaignHistory