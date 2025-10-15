'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Database, BarChart3, Lock, Zap } from 'lucide-react'

export default function ImageSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    { icon: Database, label: 'Real-Time Data' },
    { icon: BarChart3, label: 'Analytics Dashboard' },
    { icon: Lock, label: 'Secure & Compliant' },
    { icon: Zap, label: 'Lightning Fast' }
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-50 to-brand-50 rounded-3xl p-8 shadow-2xl">
              {/* Dashboard Illustration */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="space-y-4">
                  {/* Header bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="h-3 bg-gray-200 rounded w-24 mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>

                  {/* Chart area */}
                  <div className="h-40 flex items-end gap-2">
                    {[40, 70, 45, 80, 60, 90, 55, 75].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${height}%` } : { height: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-primary-500 to-primary-300 rounded-t"
                      />
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    {['98.5%', '1.2K', '+24%'].map((stat, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-900">{stat}</div>
                        <div className="h-2 bg-gray-200 rounded w-full mt-1"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-brand-950 text-white rounded-xl p-4 shadow-xl"
              >
                <BarChart3 className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for the Modern Energy Sector
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              NovaCore transforms complex regulatory data into actionable insights, enabling smarter decisions and faster compliance across all operations.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{feature.label}</span>
                  </motion.div>
                )
              })}
            </div>

            <button className="px-8 py-4 bg-brand-950 text-white rounded-lg font-semibold hover:bg-brand-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Explore Features
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

