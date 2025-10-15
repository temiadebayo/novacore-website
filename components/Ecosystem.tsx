'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Droplet, Gauge, Building, TrendingUp, Activity, FileCheck } from 'lucide-react'

const modules = [
  {
    icon: Droplet,
    title: 'UPSTREAM MODULE',
    subtitle: 'Exploration & Production',
    color: 'bg-primary-500',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-200',
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
    icon: Gauge,
    title: 'MIDSTREAM MODULE',
    subtitle: 'Transport & Processing',
    color: 'bg-brand-950',
    bgColor: 'bg-brand-50',
    borderColor: 'border-brand-200',
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
    icon: Building,
    title: 'DOWNSTREAM MODULE',
    subtitle: 'Distribution & Retail',
    color: 'bg-primary-900',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-200',
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrated, Modular, Intelligent
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-4xl mx-auto">
            NovaCore brings every part of the energy value chain into one cohesive digital space — without disrupting existing systems.
          </p>
        </motion.div>

        <div className="space-y-8">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${module.bgColor} rounded-3xl p-8 border ${module.borderColor} overflow-hidden group hover:shadow-xl transition-all duration-300`}
              >
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className={`p-4 rounded-xl ${module.color}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{module.title}</h3>
                        <p className="text-gray-600">{module.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {module.metrics.map((metric, i) => {
                      const MetricIcon = metric.icon
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer group/item"
                        >
                          <MetricIcon className="w-5 h-5 text-gray-400 group-hover/item:text-gray-600 transition-colors" />
                          <span className="text-sm text-gray-700 font-medium">{metric.label}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                <div className={`absolute inset-0 ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
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
            <span className="font-semibold">Each KPI is interactive</span> — connecting to detailed analytics, upload portals, and regulatory submission workflows.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

