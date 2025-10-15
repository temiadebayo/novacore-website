'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Upload, GitBranch, BarChart3, Send, Activity } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Upload,
    title: 'Upload Your Data',
    description: 'Submit Excel, CSV, or PDF reports directly into NovaCore\'s Operator Portal.',
    color: 'bg-primary-500',
    textColor: 'text-primary-500'
  },
  {
    number: '2',
    icon: GitBranch,
    title: 'Automated Mapping & Validation',
    description: 'NovaCore detects fields, maps them to regulatory standards, and validates entries instantly.',
    color: 'bg-brand-950',
    textColor: 'text-brand-950'
  },
  {
    number: '3',
    icon: BarChart3,
    title: 'Analyze & Visualize',
    description: 'View KPIs, charts, and trends on dynamic dashboards.',
    color: 'bg-primary-900',
    textColor: 'text-primary-900'
  },
  {
    number: '4',
    icon: Send,
    title: 'Submit to Regulator',
    description: 'Send standardized data directly to regulators (NUPRC or NMDPRA) with status tracking.',
    color: 'bg-brand-950',
    textColor: 'text-brand-950'
  },
  {
    number: '5',
    icon: Activity,
    title: 'Monitor Compliance in Real-Time',
    description: 'Both operators and regulators access synced insights — transforming oversight into a collaborative process.',
    color: 'bg-primary-500',
    textColor: 'text-primary-500'
  }
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seamless journey from data upload to real-time compliance
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-brand-200 to-primary-200 transform -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-block bg-white rounded-2xl p-8 shadow-xl border border-gray-100 ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-md`}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse lg:justify-end' : ''}`}>
                        <div className={`p-3 rounded-xl ${step.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`text-5xl font-bold ${step.textColor}`}>
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <div className={`w-4 h-4 rounded-full ${step.color} shadow-lg`} />
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

