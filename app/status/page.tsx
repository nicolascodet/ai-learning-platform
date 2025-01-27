'use client'

import React, { useState, useEffect } from 'react'

const services = [
  {
    id: 1,
    name: 'API Server',
    status: 'Operational',
    uptime: '99.9%',
    latency: '45ms',
    lastIncident: 'None',
    load: 32,
    requests: '2.3k/min',
    errorRate: '0.01%',
    region: 'US-West'
  },
  {
    id: 2,
    name: 'Authentication Service',
    status: 'Operational',
    uptime: '99.8%',
    latency: '65ms',
    lastIncident: '2024-01-20 - Brief outage',
    load: 28,
    requests: '1.8k/min',
    errorRate: '0.02%',
    region: 'US-East'
  },
  {
    id: 3,
    name: 'Database',
    status: 'Operational',
    uptime: '99.9%',
    latency: '30ms',
    lastIncident: 'None',
    load: 45,
    requests: '4.5k/min',
    errorRate: '0.00%',
    region: 'US-West'
  },
  {
    id: 4,
    name: 'Storage Service',
    status: 'Degraded',
    uptime: '98.5%',
    latency: '120ms',
    lastIncident: '2024-01-28 - High latency',
    load: 78,
    requests: '1.2k/min',
    errorRate: '0.15%',
    region: 'US-East'
  }
]

const incidents = [
  {
    date: '2024-01-28',
    status: 'Degraded',
    service: 'Storage Service',
    description: 'Storage service experiencing high latency',
    duration: '45 minutes',
    impact: 'Minor',
    resolution: 'Automated recovery completed'
  },
  {
    date: '2024-01-20',
    status: 'Outage',
    service: 'Authentication Service',
    description: 'Brief authentication service disruption',
    duration: '15 minutes',
    impact: 'Major',
    resolution: 'Server restart resolved the issue'
  },
  {
    date: '2024-01-15',
    status: 'Degraded',
    service: 'API Server',
    description: 'Increased API response times',
    duration: '30 minutes',
    impact: 'Minor',
    resolution: 'Load balancer reconfiguration'
  }
]

const metrics = {
  totalRequests: '2.5M',
  averageLatency: '52ms',
  errorRate: '0.05%',
  availability: '99.95%'
}

export default function StatusPage() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Global Metrics */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">System Status</h1>
          <div className="text-sm text-gray-600">
            Last updated: {currentTime.toLocaleString()}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Requests', value: metrics.totalRequests, icon: '📊' },
            { label: 'Avg. Latency', value: metrics.averageLatency, icon: '⚡' },
            { label: 'Error Rate', value: metrics.errorRate, icon: '⚠️' },
            { label: 'Availability', value: metrics.availability, icon: '✅' }
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
              <div className="text-xl font-bold">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Status Grid */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
          {services.map(service => (
            <div 
              key={service.id}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">{service.name}</h3>
                <span 
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.status === 'Operational' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {service.status}
                </span>
              </div>

              {/* Service Metrics */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Region</span>
                  <span className="font-medium">{service.region}</span>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Load</span>
                    <span className="font-medium">{service.load}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`rounded-full h-1.5 transition-all duration-500 ${
                        service.load > 80 ? 'bg-red-500' :
                        service.load > 60 ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${service.load}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-600">Requests</span>
                    <div className="font-medium">{service.requests}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Error Rate</span>
                    <div className="font-medium">{service.errorRate}</div>
                  </div>
                </div>

                <div className="pt-2 text-xs border-t border-gray-200">
                  <span className="text-gray-500">Last incident: </span>
                  <span>{service.lastIncident}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Incident History */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">{incident.date}</span>
                    <span 
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        incident.status === 'Outage'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {incident.status}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{incident.service}</span>
                </div>
                
                <p className="text-gray-600 mb-2">{incident.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <span className="ml-2 font-medium">{incident.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Impact:</span>
                    <span className={`ml-2 font-medium ${
                      incident.impact === 'Major' ? 'text-red-600' : 'text-yellow-600'
                    }`}>
                      {incident.impact}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Resolution:</span>
                    <span className="ml-2 font-medium text-green-600">Complete</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Uptime */}
        <div className="border-t border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">30-Day Uptime</h3>
          <div className="grid grid-cols-30 gap-1 h-8">
            {Array.from({ length: 30 }).map((_, index) => (
              <div
                key={index}
                className={`rounded-sm ${
                  Math.random() > 0.1 ? 'bg-green-500' : 'bg-red-500'
                }`}
                title={`Day ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>30 days ago</span>
            <span>Today</span>
          </div>
        </div>
      </div>
    </div>
  )
} 