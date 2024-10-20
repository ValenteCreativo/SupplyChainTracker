'use client'

import React from 'react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/UI/Tabs"
import { Card, CardContent, CardHeader, CardTitle } from "src/components/UI/card"
import { Button } from "src/components/UI/button"
import MilestonesForm from 'src/components/NGO-Dashboard/MilestonesForm'
import DonationsTracking from 'src/components/NGO-Dashboard/DonationsTracking'
import ImpactReportForm from 'src/components/NGO-Dashboard/ImpactReportForm'
import MinimalistGraph from 'src/components/NGO-Dashboard/MinimalistGraph'
import Image from 'next/image'

const ManageCampaign: React.FC = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-[#388E3C] bg-opacity-90 backdrop-blur-lg shadow-md w-full">
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
          Manage Campaign
        </h1>

        <div className="flex items-center space-x-4">
          <Link href="/NGODashboard" passHref>
            <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Dashboard
            </button>
          </Link>
        </div>
      </header>

      {/* Ajuste dinámico para que el contenido no quede cubierto */}
      <main className="flex-grow p-4 md:p-8 space-y-8 pt-[120px] md:pt-[140px]"> {/* Ajusta el padding según el tamaño del header */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <MinimalistGraph />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="milestones">
            <Card>
              <CardHeader>
                <CardTitle>Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <MilestonesForm />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="donations">
            <Card>
              <CardHeader>
                <CardTitle>Donations Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <DonationsTracking />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="impact">
            <Card>
              <CardHeader>
                <CardTitle>Impact Report</CardTitle>
              </CardHeader>
              <CardContent>
                <ImpactReportForm />
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

export default ManageCampaign
