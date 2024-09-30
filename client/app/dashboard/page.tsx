// pages/dashboard.js
'use client'


import { useState } from 'react';

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState('Jan 20, 2023 - Feb 09, 2023');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="font-bold text-lg">Alicia Koch</div>
          <nav className="flex space-x-4">
            <a href="#" className="text-white font-semibold">Overview</a>
            <a href="#" className="text-gray-400">Customers</a>
            <a href="#" className="text-gray-400">Products</a>
            <a href="#" className="text-gray-400">Settings</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
          />
          <img
            src="/avatar-placeholder.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full bg-gray-700"
          />
        </div>
      </header>

      {/* Content */}
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-2 bg-gray-700 rounded-md text-white">Overview</button>
          <button className="px-4 py-2 bg-gray-800 rounded-md text-gray-400">Analytics</button>
          <button className="px-4 py-2 bg-gray-800 rounded-md text-gray-400">Reports</button>
          <button className="px-4 py-2 bg-gray-800 rounded-md text-gray-400">Notifications</button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-gray-400">Total Revenue</h2>
            <p className="text-3xl font-bold">$45,231.89</p>
            <p className="text-green-500 mt-2">+20.1% from last month</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-gray-400">Subscriptions</h2>
            <p className="text-3xl font-bold">+2350</p>
            <p className="text-green-500 mt-2">+180.1% from last month</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-gray-400">Sales</h2>
            <p className="text-3xl font-bold">+12,234</p>
            <p className="text-green-500 mt-2">+19% from last month</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-gray-400">Active Now</h2>
            <p className="text-3xl font-bold">+573</p>
            <p className="text-green-500 mt-2">+201 since last hour</p>
          </div>
        </div>

        {/* Overview Graph and Recent Sales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Overview Graph */}
          <div className="p-6 bg-gray-800 rounded-lg col-span-2">
            <h2 className="text-gray-400 mb-4">Overview</h2>
            {/* Placeholder for Graph */}
            <div className="h-64 bg-gray-700 rounded-lg">
              {/* This can be replaced with a real chart */}
              <p className="flex justify-center items-center h-full text-gray-500">[Chart Placeholder]</p>
            </div>
          </div>

          {/* Recent Sales */}
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-gray-400 mb-4">Recent Sales</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src="/avatar-placeholder.png"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full bg-gray-700"
                  />
                  <div>
                    <p className="font-semibold">Olivia Martin</p>
                    <p className="text-gray-400">olivia.martin@email.com</p>
                  </div>
                </div>
                <p className="font-semibold">+$1,999.00</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src="/avatar-placeholder.png"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full bg-gray-700"
                  />
                  <div>
                    <p className="font-semibold">Jackson Lee</p>
                    <p className="text-gray-400">jackson.lee@email.com</p>
                  </div>
                </div>
                <p className="font-semibold">+$39.00</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src="/avatar-placeholder.png"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full bg-gray-700"
                  />
                  <div>
                    <p className="font-semibold">Isabella Nguyen</p>
                    <p className="text-gray-400">isabella.nguyen@email.com</p>
                  </div>
                </div>
                <p className="font-semibold">+$299.00</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src="/avatar-placeholder.png"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full bg-gray-700"
                  />
                  <div>
                    <p className="font-semibold">William Kim</p>
                    <p className="text-gray-400">will@email.com</p>
                  </div>
                </div>
                <p className="font-semibold">+$99.00</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src="/avatar-placeholder.png"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full bg-gray-700"
                  />
                  <div>
                    <p className="font-semibold">Sofia Davis</p>
                    <p className="text-gray-400">sofia.davis@email.com</p>
                  </div>
                </div>
                <p className="font-semibold">+$39.00</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
