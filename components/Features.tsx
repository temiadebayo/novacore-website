'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Brain, Plug, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Automated Compliance Reporting',
    description: 'Eliminate manual bottlenecks with seamless data uploads (Excel, CSV, PDF). NovaCore automatically maps, validates, and syncs your submissions in real time.',
    color: 'bg-primary-500',
    bgColor: 'bg-primary-50'
  },
  {
    icon: Brain,
    title: 'Regulatory Data Intelligence',
    description: 'Powered by AI and predictive analytics, NovaCore helps regulators anticipate risks, track industry performance, and design forward-looking governance strategies.',
    color: 'bg-brand-950',
    bgColor: 'bg-brand-50'
  },
  {
    icon: Plug,
    title: 'System Integration',
    description: 'NovaCore is designed to complement, not replace, existing regulatory systems. It connects to current databases and data streams, enhancing visibility and operational efficiency.',
    color: 'bg-primary-900',
    bgColor: 'bg-primary-50'
  },
  {
    icon: ShieldCheck,
    title: 'Governance & Risk Management',
    description: 'Transparency and accountability are built into every workflow, ensuring data credibility and strengthening Nigeria\'s position in global regulatory standards.',
    color: 'bg-primary-500',
    bgColor: 'bg-brand-50'
  }
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful capabilities designed for modern compliance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${feature.bgColor} rounded-3xl p-8 border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300`}
              >
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl ${feature.color} mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className={`absolute -bottom-20 -right-20 w-64 h-64 ${feature.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

