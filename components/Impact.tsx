'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Flame, Building2, Rocket } from 'lucide-react'

const impacts = [
  {
    icon: Flame,
    title: 'For the Energy Sector',
    description: 'A unified compliance ecosystem that enhances transparency and accelerates reporting.',
    color: 'bg-primary-500'
  },
  {
    icon: Building2,
    title: 'For the Government',
    description: 'Data-driven governance that aligns with global best practices.',
    color: 'bg-brand-950'
  },
  {
    icon: Rocket,
    title: 'For the Future',
    description: 'Proactive regulation built on intelligence, not paperwork.',
    color: 'bg-primary-900'
  }
]

export default function Impact() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming compliance across every level
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl ${impact.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {impact.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {impact.description}
                  </p>
                </div>

                <div className={`absolute -bottom-20 -right-20 w-64 h-64 ${impact.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

