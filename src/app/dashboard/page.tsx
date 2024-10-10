import React, { useState, useEffect } from 'react';
import { BarChart2, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    entity: '',
    product: '',
    quantity: '',
    location: '',
    status: 'In Transit',
  });
  const [inventory, setInventory] = useState({});
  const [analytics, setAnalytics] = useState({
    totalDonations: 0,
    totalDistributed: 0,
    efficiency: 0,
  });

  useEffect(() => {
    fetchTransactions();
    fetchInventory();
    calculateAnalytics();
  }, []);

  const fetchTransactions = () => {
    setTransactions([
      { id: 1, entity: 'Donation Center A', product: 'Water Bottles', quantity: 1000, location: 'New York', status: 'Received', timestamp: new Date().toISOString() },
      { id: 2, entity: 'Truck A', product: 'Water Bottles', quantity: 500, location: 'En route to NJ', status: 'In Transit', timestamp: new Date().toISOString() },
      { id: 3, entity: 'Distribution Center B', product: 'Water Bottles', quantity: 500, location: 'New Jersey', status: 'Distributed', timestamp: new Date().toISOString() },
    ]);
  };

  const fetchInventory = () => {
    setInventory({
      'Water Bottles': 2000,
      'Blankets': 500,
      'First Aid Kits': 200,
    });
  };

  const calculateAnalytics = () => {
    setAnalytics({
      totalDonations: 5000,
      totalDistributed: 4500,
      efficiency: 90,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      ...formData,
      timestamp: new Date().toISOString(),
    };
    setTransactions([...transactions, newTransaction]);
    setFormData({ entity: '', product: '', quantity: '', location: '', status: 'In Transit' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-[#E6D0B8] p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Supply Chain Dashboard</h1>
      </header>

      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{analytics.totalDonations}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Distributed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{analytics.totalDistributed}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{analytics.efficiency}%</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Entity</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell>{tx.entity}</TableCell>
                    <TableCell>{tx.product}</TableCell>
                    <TableCell>{tx.quantity}</TableCell>
                    <TableCell>{tx.location}</TableCell>
                    <TableCell>{tx.status}</TableCell>
                    <TableCell>{new Date(tx.timestamp).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Manual Attestation</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <Label htmlFor="entity">Entity</Label>
                <Input
                  id="entity"
                  name="entity"
                  value={formData.entity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="product">Product</Label>
                <Input
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select name="status" value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Received">Received</SelectItem>
                    <SelectItem value="In Transit">In Transit</SelectItem>
                    <SelectItem value="Distributed">Distributed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit">Submit Attestation</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}