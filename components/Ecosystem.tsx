'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Droplet, Gauge, Building, TrendingUp, Activity, FileCheck, Zap, DollarSign, Shield } from 'lucide-react'

const ecosystemSectors = [
  {
    name: 'Oil & Gas',
    icon: Droplet,
    color: 'bg-primary-500',
    borderColor: 'border-primary-300',
    bgColor: 'bg-primary-50',
    modules: [
      {
        title: 'Upstream Module',
        subtitle: 'Exploration & Production',
        metrics: [
          { label: 'Daily Production Output', icon: TrendingUp },
          { label: 'Compliance Rate', icon: Activity },
          { label: 'CAPEX vs Budget', icon: Gauge },
          { label: 'HSE & Environmental Compliance', icon: FileCheck },
          { label: 'License & Permit Tracking', icon: FileCheck },
          { label: 'Incident & Inspection Logs', icon: Activity }
        ]
      },
      {
        title: 'Midstream Module',
        subtitle: 'Transport & Processing',
        metrics: [
          { label: 'Pipelines Monitored', icon: Activity },
          { label: 'Throughput Volume', icon: TrendingUp },
          { label: 'Integrity Compliance', icon: FileCheck },
          { label: 'Terminal & Plant Metrics', icon: Gauge },
          { label: 'Transfer & Shipping Logs', icon: FileCheck },
          { label: 'Incident Reports', icon: Activity }
        ]
      },
      {
        title: 'Downstream Module',
        subtitle: 'Distribution & Retail',
        metrics: [
          { label: 'Registered Outlets', icon: Building },
          { label: 'License Compliance Rate', icon: FileCheck },
          { label: 'Quality Testing Compliance', icon: Activity },
          { label: 'Retail Pricing Compliance', icon: Gauge },
          { label: 'Delivery & Inventory Logs', icon: FileCheck },
          { label: 'Incident Reporting', icon: Activity }
        ]
      }
    ]
  },
  {
    name: 'Power',
    icon: Zap,
    color: 'bg-brand-600',
    borderColor: 'border-brand-300',
    bgColor: 'bg-brand-50',
    modules: [
      {
        title: 'Regulators Module',
        subtitle: 'Regulatory Oversight & Compliance',
        metrics: [
          { label: 'License Management', icon: FileCheck },
          { label: 'Tariff Monitoring', icon: Gauge },
          { label: 'Grid Performance Tracking', icon: Activity },
          { label: 'Generation Capacity Reports', icon: TrendingUp },
          { label: 'Consumer Protection Metrics', icon: Shield },
          { label: 'Compliance Audits', icon: FileCheck }
        ]
      },
      {
        title: 'Operators Module',
        subtitle: 'Power Generation & Distribution',
        metrics: [
          { label: 'Generation Output', icon: TrendingUp },
          { label: 'Distribution Network', icon: Activity },
          { label: 'Equipment Maintenance', icon: Gauge },
          { label: 'Load Balancing', icon: Activity },
          { label: 'Outage Management', icon: FileCheck },
          { label: 'Renewable Integration', icon: Zap }
        ]
      }
    ]
  },
  {
    name: 'Finance',
    icon: DollarSign,
    color: 'bg-primary-700',
    borderColor: 'border-primary-300',
    bgColor: 'bg-primary-50',
    modules: [
      {
        title: 'Financial Compliance',
        subtitle: 'Regulatory Reporting & Oversight',
        metrics: [
          { label: 'Revenue Reporting', icon: TrendingUp },
          { label: 'Taxation Compliance', icon: FileCheck },
          { label: 'Audit Tracking', icon: Activity },
          { label: 'Payment Processing', icon: DollarSign },
          { label: 'Financial Statements', icon: Gauge },
          { label: 'Budget Monitoring', icon: TrendingUp }
        ]
      }
    ]
  }
]

export default function Ecosystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ecosystem" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-semibold tracking-tight text-gray-900 mb-6">
            The Ecosystem
          </h2>
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto tracking-tight">
            Integrated, Modular, Intelligent
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-4xl mx-auto leading-relaxed">
            NovaCore brings every part of the energy value chain into one cohesive digital space, without disrupting existing systems.
          </p>
        </motion.div>

        <div className="space-y-12">
          {ecosystemSectors.map((sector, sectorIndex) => {
            const SectorIcon = sector.icon
            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: sectorIndex * 0.2 }}
                className="space-y-6"
              >
                {/* Sector Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl ${sector.color}`}>
                    <SectorIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{sector.name}</h3>
                </div>

                {/* Modules */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sector.modules.map((module, moduleIndex) => (
                    <motion.div
                      key={module.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, delay: sectorIndex * 0.2 + moduleIndex * 0.1 }}
                      className={`relative ${sector.bgColor} rounded-2xl p-6 border-2 ${sector.borderColor} overflow-hidden group hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="relative z-10">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">
                          {module.title}
                        </h4>
                        <p className="text-gray-600 mb-4 text-sm">{module.subtitle}</p>

                        <div className="space-y-2">
                          {module.metrics.map((metric, i) => {
                            const MetricIcon = metric.icon
                            return (
                              <div
                                key={i}
                                className="flex items-center gap-2 p-2 bg-white/80 rounded-lg hover:bg-white transition-colors"
                              >
                                <MetricIcon className="w-4 h-4 text-gray-400" />
                                <span className="text-xs text-gray-700 font-medium">{metric.label}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      <div className={`absolute inset-0 ${sector.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl border border-primary-200 text-center"
        >
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Each KPI is interactive</span>, connecting to detailed analytics, upload portals, and regulatory submission workflows.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

