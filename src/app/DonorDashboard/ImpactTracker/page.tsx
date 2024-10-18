'use client'

import React, { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import { ChartContainer, ChartTooltip } from "src/components/UI/charts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "src/components/UI/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/UI/Tabs"
import { Progress } from "src/components/UI/Progress"
import { Button } from "src/components/UI/button"
import { Share2, ArrowUpRight } from 'lucide-react'

const ImpactTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const donationData = [
    { name: "Monetary", value: 4000 },
    { name: "In-Kind", value: 1500 },
    { name: "Volunteering", value: 2500 },
  ]

  const campaignData = [
    { name: "Water for Africa", value: 4000, goal: 8000, progress: 50 },
    { name: "Education for All", value: 3000, goal: 5000, progress: 60 },
    { name: "Volunteers for Nature", value: 2000, goal: 5000, progress: 40 },
  ]

  const supplyChainData = [
    { item: "Water Bottles", campaign: "Africa", status: "Delivered", date: "16/Oct/2024" },
    { item: "School Supplies", campaign: "India", status: "En route", date: "17/Oct/2024" },
    { item: "Cleaning Supplies", campaign: "Brazil", status: "Arrived", date: "15/Oct/2024" },
  ]

  const COLORS = ['#C2A676', '#4A3F35', '#D6BA8A']

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col">
      <header className="sticky top-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
        <h1 className="text-2xl md:text-4xl font-semibold text-[#4A3F35]">Impact Tracker</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          Share Impact
        </Button>
      </header>

      <main className="flex-grow p-4 md:p-8 space-y-8 pt-8">
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Your Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      Monetary: {
                        label: "Monetary",
                        color: "hsl(var(--chart-1))",
                      },
                      "In-Kind": {
                        label: "In-Kind",
                        color: "hsl(var(--chart-2))",
                      },
                      Volunteering: {
                        label: "Volunteering",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                    className="h-[300px]"
                  >
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
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {donationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartTooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="grid grid-cols-3 gap-4 text-center mt-4">
                    <div>
                      <p className="text-sm text-gray-500">Monetary</p>
                      <p className="text-lg font-semibold">$4,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">In-Kind</p>
                      <p className="text-lg font-semibold">15 items</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Volunteering</p>
                      <p className="text-lg font-semibold">25 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      value: {
                        label: "Value",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={campaignData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip />
                        <Bar dataKey="value" fill="#C2A676" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="campaigns">
            <div className="space-y-6">
              {campaignData.map((campaign, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{campaign.name}</CardTitle>
                    <CardDescription>Progress: {campaign.progress}%</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={campaign.progress} className="mb-2" />
                    <p className="text-sm text-gray-500">
                      ${campaign.value.toLocaleString()} raised of ${campaign.goal.toLocaleString()} goal
                    </p>
                    <Button variant="outline" className="mt-4">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="supply-chain">
            <Card>
              <CardHeader>
                <CardTitle>Supply Chain Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Item</th>
                        <th className="text-left p-2">Campaign</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplyChainData.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-2">{item.item}</td>
                          <td className="p-2">{item.campaign}</td>
                          <td className="p-2">{item.status}</td>
                          <td className="p-2">{item.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Impact Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Your contributions have made a significant difference! Here's a summary of your impact:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Provided clean water to 100 families in Africa</li>
              <li>Supported education for 50 children in India</li>
              <li>Contributed to cleaning 5 miles of coastline in Brazil</li>
            </ul>
            <Button className="w-full sm:w-auto">
              Share Your Impact Story
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-[#4A3F35] text-white py-8 mt-16 w-full flex-shrink-0">
        <div className="container mx-auto text-center">
          <p>From México with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">Github</a></p>
        </div>
      </footer>
    </div>
  )
}

export default ImpactTracker