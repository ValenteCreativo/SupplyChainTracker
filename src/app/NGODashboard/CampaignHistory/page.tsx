'use client'

import React from 'react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/UI/Tabs"
import { Card, CardContent, CardHeader, CardTitle } from "src/components/UI/card"
import { Button } from "src/components/UI/button"
import CampaignHistoryList from 'src/components/NGO-Dashboard/CampaignHistoryList'
import ImpactScoreGraph from 'src/components/NGO-Dashboard/ImpactScoreGraph'
import ReputationChart from 'src/components/NGO-Dashboard/ReputationChart'

const CampaignHistory: React.FC = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col">
      <header className="sticky top-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-[#4A3F35]">Campaign History</h1>
        <Link href="/NGODashboard" passHref>
          <Button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white hover:opacity-90 transition-opacity">
            Dashboard
          </Button>
        </Link>
      </header>

      <main className="flex-grow p-4 md:p-8 space-y-8 pt-8">
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