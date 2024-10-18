'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/UI/Tabs"
import { Card, CardContent, CardHeader, CardTitle } from "src/components/UI/card"
import { Button } from "src/components/UI/button"
import { Input } from "src/components/UI/input"
import { Toggle } from "src/components/UI/toggle"
import { MapPin, List } from 'lucide-react'

const SearchCampaigns: React.FC = () => {
  const [view, setView] = useState<'list' | 'map'>('list')

  const campaigns = [
    { name: "Water for Africa", category: "In-kind", location: "Kenya", goal: "10000 USD" },
    { name: "Education for All", category: "Monetary", location: "India", goal: "5000 USD" },
    { name: "Volunteers for Nature", category: "Volunteer", location: "Brazil", goal: "Help Needed" },
  ]

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col">
      <header className="sticky top-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
        <Image
          src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
          alt="Logo"
          width={100}
          height={50}
        />
        <Link href="/" passHref>
          <Button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white hover:opacity-90 transition-opacity">
            Home
          </Button>
        </Link>
      </header>

      <main className="flex-grow p-4 md:p-8 space-y-8 pt-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#4A3F35] mb-6 text-center">Search Campaigns</h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <Input
            type="text"
            placeholder="Search for campaigns..."
            className="w-full md:w-1/3"
          />
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="outline">Monetary</Button>
            <Button variant="outline">In-kind</Button>
            <Button variant="outline">Volunteer</Button>
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <Toggle
            variant="outline"
            aria-label="Toggle view"
            pressed={view === 'list'}
            onPressedChange={() => setView(view === 'list' ? 'map' : 'list')}
          >
            {view === 'list' ? <List className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
            {view === 'list' ? 'List View' : 'Map View'}
          </Toggle>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">All Campaigns</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="nearby">Nearby</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>All Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                {view === 'list' ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {campaigns.map((campaign, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{campaign.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p><strong>Category:</strong> {campaign.category}</p>
                          <p><strong>Location:</strong> {campaign.location}</p>
                          <p><strong>Goal:</strong> {campaign.goal}</p>
                          <Button className="mt-4 w-full">Donate</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="h-96 bg-gray-200 flex items-center justify-center rounded-lg">
                    <p className="text-xl text-[#4A3F35]">Map View Coming Soon</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="featured">
            <Card>
              <CardHeader>
                <CardTitle>Featured Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Featured campaigns will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="nearby">
            <Card>
              <CardHeader>
                <CardTitle>Nearby Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Nearby campaigns will be displayed here.</p>
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

export default SearchCampaigns