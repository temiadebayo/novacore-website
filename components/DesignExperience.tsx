'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Layout, MousePointer2, Zap, Palette } from 'lucide-react'

const designFeatures = [
  {
    icon: Layout,
    title: 'Intuitive Dashboards',
    description: 'Clean, organized layouts that put the most important information front and center'
  },
  {
    icon: MousePointer2,
    title: 'Clickable KPI Tiles',
    description: 'Interactive elements that respond to user actions with instant feedback'
  },
  {
    icon: Zap,
    title: 'Real-time Validation',
    description: 'Instant upload and validation modals with clear status indicators'
  },
  {
    icon: Palette,
    title: 'Unified Design',
    description: 'Consistent color palette and typography across all portals'
  }
]

export default function DesignExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-semibold tracking-tight text-gray-900 mb-6">
            Design & Experience
          </h2>
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto mb-4 tracking-tight">
            Consistency. Clarity. Control.
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
            NovaCore&apos;s user interface is modern yet familiar, built to preserve your existing workflows while elevating them with seamless interactivity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {designFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-500 flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 bg-primary-100 text-primary-900 rounded-full font-medium">
              Smooth Animations
            </span>
            <span className="px-4 py-2 bg-brand-100 text-brand-950 rounded-full font-medium">
              Responsive Design
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full font-medium">
              Seamless Transitions
            </span>
            <span className="px-4 py-2 bg-brand-100 text-brand-900 rounded-full font-medium">
              Modern UI
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

