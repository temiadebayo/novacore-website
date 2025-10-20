'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-semibold tracking-tight text-gray-900 mb-6">
            Beyond Dashboards. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-900">
              Toward Real-Time Compliance.
            </span>
</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed"
        >
          <p>
            NovaCore is a next-generation <span className="font-semibold text-brand-950">compliance and regulatory intelligence ecosystem</span> that connects regulators, operators, and stakeholders through one unified digital platform.
          </p>

          <p>
            It transforms traditional oversight into a <span className="font-semibold text-brand-950">collaborative, data-driven experience</span>, giving every participant, from national regulators to field operators, access to the same, accurate, real-time information.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl border border-primary-200"
          >
            <p className="text-xl font-semibold text-gray-900 text-center">
              Our mission: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-900">
                To simplify compliance. Amplify insights. And strengthen trust across Africa&apos;s energy landscape.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

