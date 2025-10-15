'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Building2, Users, CheckCircle2 } from 'lucide-react'

const stakeholders = [
  {
    icon: Shield,
    title: 'For Regulators',
    description: 'Access real-time sector-wide insights that simplify oversight, strengthen enforcement, and improve transparency.',
    benefits: [
      'Monitor compliance across Upstream, Midstream & Downstream',
      'Automate data validation and reporting workflows',
      'Gain predictive intelligence on risks and trends',
      'Design proactive, data-informed policies'
    ],
    color: 'bg-primary-500'
  },
  {
    icon: Building2,
    title: 'For Operators',
    description: 'Say goodbye to repetitive, manual compliance reporting.',
    benefits: [
      'Upload and submit reports seamlessly in standardized formats',
      'Track submission status (Pending → Acknowledged → Approved)',
      'Manage KPI dashboards customized for your operations',
      'Engage with regulators securely and efficiently'
    ],
    color: 'bg-brand-950'
  },
  {
    icon: Users,
    title: 'For Stakeholders',
    description: 'Experience data integrity and accountability that drive industry growth.',
    benefits: [
      'Unified view of sector performance',
      'Improved decision-making through verified analytics',
      'Strengthened confidence in governance'
    ],
    color: 'bg-primary-900'
  }
]

export default function WhyNovaCore() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why NovaCore
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon
            return (
              <motion.div
                key={stakeholder.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl ${stakeholder.color} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {stakeholder.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {stakeholder.description}
                </p>

                <ul className="space-y-3">
                  {stakeholder.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className={`absolute inset-0 rounded-2xl ${stakeholder.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

