'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/UI/Tabs";
import { Card, CardContent, CardHeader, CardTitle } from "src/components/UI/card";
import { Button } from "src/components/UI/button";
import { Input } from "src/components/UI/input";
import { Toggle } from "src/components/UI/toggle";
import { MapPin, List } from 'lucide-react';
import MapboxCampaign from 'src/components/Supplier-Dashboard/MapboxCampaigns'; // Adjust this path as needed

const SearchCampaigns: React.FC = () => {
  const [view, setView] = useState<'list' | 'map'>('list');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Function to get user location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getUserLocation(); // Get user location on component mount
  }, []);

  const campaigns = [
    { name: "Blankets and Hygiene Products for Women with Disabilities", category: "In-kind", location: "Guatemala", goal: "Help Needed" },
    { name: "River Magdalena Clean-Up Campaign", category: "Volunteer", location: "Mexico City", goal: "Help Needed" },
    { name: "Rainwater Harvesting Solution", category: "Monetary", location: "Colombia", goal: "5000 USD" },
    { name: "Support for Women's Shelters", category: "In-kind", location: "Peru", goal: "Help Needed" },
    { name: "Education Resources for Children", category: "Monetary", location: "Mexico", goal: "3000 USD" },
    { name: "Food Distribution for Vulnerable Families", category: "In-kind", location: "Brazil", goal: "Help Needed" },
    { name: "Semilla Azul A.C.", category: "Donations", location: "Acapulco, Mexico", goal: "Collection center to help the population affected by the hurricane." },
  ];

  // Filter campaigns based on user location
  const localCampaigns = userLocation 
    ? campaigns.filter(campaign => campaign.location.includes("Mexico")) // Adjust logic as necessary
    : campaigns;

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

        <h1 className="text-3xl font-bold text-center text-[#4A3F35] absolute left-1/2 transform -translate-x-1/2">
          Search Campaigns
        </h1>

        <div className="flex items-center space-x-4">
          <Link href="/SupplierDashboard" passHref>
            <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Dashboard
            </button>
          </Link>
        </div>
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
            <Button 
              variant="outline" 
              className="text-lg font-semibold hover:bg-[#D6BA8A] transition-colors"
              onClick={() => setCategoryFilter('all')}
            >
              All
            </Button>
            <Button 
              variant="outline" 
              className="text-lg font-semibold hover:bg-[#D6BA8A] transition-colors"
              onClick={() => setCategoryFilter('Monetary')}
            >
              Monetary
            </Button>
            <Button 
              variant="outline" 
              className="text-lg font-semibold hover:bg-[#D6BA8A] transition-colors"
              onClick={() => setCategoryFilter('In-kind')}
            >
              In-kind
            </Button>
            <Button 
              variant="outline" 
              className="text-lg font-semibold hover:bg-[#D6BA8A] transition-colors"
              onClick={() => setCategoryFilter('Volunteer')}
            >
              Volunteer
            </Button>
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
            <TabsTrigger value="local">Local Campaigns</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>All Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                {view === 'map' ? (
                  <div className="h-96 bg-gray-200 flex items-center justify-center rounded-lg">
                    <MapboxCampaign /> {/* Here the map is displayed */}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {campaigns.map((campaign, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-sm">{campaign.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm"><strong>Category:</strong> {campaign.category}</p>
                          <p className="text-sm"><strong>Location:</strong> {campaign.location}</p>
                          <p className="text-sm"><strong>Goal:</strong> {campaign.goal}</p>
                          {/* Added button for Semilla Azul A.C. */}
                          <Button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity w-full mt-4">
                            {campaign.name === "Semilla Azul A.C." ? "Check Recollection Point" : 
                              (campaign.category === "Volunteer" ? "Apply as Volunteer" :
                              (campaign.category === "Monetary" ? "Donate" : "Check Recollection Point"))}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Semilla Azul A.C.</CardTitle> {/* Featured Campaign */}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm"><strong>Category:</strong> Donations</p>
                      <p className="text-sm"><strong>Location:</strong> Acapulco, Mexico</p>
                      <p className="text-sm"><strong>Goal:</strong> Collection center to help the population affected by the hurricane.</p>
                      <Button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity w-full mt-4">Check Recollection Point</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="local">
            <Card>
              <CardHeader>
                <CardTitle>Local Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                {view === 'map' ? (
                  <div className="h-96 bg-gray-200 flex items-center justify-center rounded-lg">
                    <MapboxCampaign /> {/* Here the map is displayed */}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {localCampaigns.map((campaign, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-sm">{campaign.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm"><strong>Category:</strong> {campaign.category}</p>
                          <p className="text-sm"><strong>Location:</strong> {campaign.location}</p>
                          <p className="text-sm"><strong>Goal:</strong> {campaign.goal}</p>
                          {/* Added button for Semilla Azul A.C. */}
                          <Button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity w-full mt-4">
                            {campaign.name === "Semilla Azul A.C." ? "Check Recollection Point" : 
                              (campaign.category === "Volunteer" ? "Apply as Volunteer" :
                              (campaign.category === "Monetary" ? "Donate" : "Check Recollection Point"))}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      {/* Footer */}
      <footer className="bg-[#4A3F35] text-white py-8 mt-16 w-full flex-shrink-0">
        <div className="container mx-auto text-center">
          <p>From Mexico with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">GitHub</a></p>
        </div>
      </footer>
      
    </div>
  );
};

export default SearchCampaigns;
