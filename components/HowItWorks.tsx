'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Upload, GitBranch, BarChart3, Send, Activity, FileSearch, Database, Bell, CheckCircle, Shield } from 'lucide-react'

const operatorSteps = [
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
    description: 'Access synced insights and track your compliance status across all regulatory requirements.',
    color: 'bg-primary-500',
    textColor: 'text-primary-500'
  }
]

const regulatorSteps = [
  {
    number: '1',
    icon: Database,
    title: 'Access Unified Dashboard',
    description: 'View real-time data from all operators across upstream, midstream, and downstream sectors in one centralized portal.',
    color: 'bg-brand-600',
    textColor: 'text-brand-600'
  },
  {
    number: '2',
    icon: FileSearch,
    title: 'Review Submissions',
    description: 'Automatically receive, validate, and review operator submissions with intelligent data verification and anomaly detection.',
    color: 'bg-primary-600',
    textColor: 'text-primary-600'
  },
  {
    number: '3',
    icon: BarChart3,
    title: 'Analyze Sector Performance',
    description: 'Track industry-wide trends, compliance rates, and performance metrics through interactive dashboards and visualizations.',
    color: 'bg-brand-700',
    textColor: 'text-brand-700'
  },
  {
    number: '4',
    icon: Bell,
    title: 'Set Alerts & Notifications',
    description: 'Configure custom alerts for non-compliance, submission deadlines, and critical threshold breaches across all operators.',
    color: 'bg-primary-700',
    textColor: 'text-primary-700'
  },
  {
    number: '5',
    icon: Shield,
    title: 'Generate Reports & Insights',
    description: 'Create comprehensive regulatory reports, export data for policy-making, and share insights with stakeholders.',
    color: 'bg-brand-800',
    textColor: 'text-brand-800'
  }
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<'operators' | 'regulators'>('operators')
  
  const steps = activeTab === 'operators' ? operatorSteps : regulatorSteps

  return (
    <section id="how-it-works" ref={ref} className="py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-brand-500/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-sm text-white font-medium">PROCESS OVERVIEW</span>
          </div>
          
          <h2 className="font-display font-bold text-white mb-6 tracking-tight">
            <span className="text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium tracking-wide">
            From raw data to regulatory compliance in <span className="text-primary-400 font-bold">5 intelligent steps</span>
          </p>

          {/* Tab Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center gap-4 mt-12"
          >
            <button
              onClick={() => setActiveTab('operators')}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                activeTab === 'operators'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
            >
              For Operators
            </button>
            <button
              onClick={() => setActiveTab('regulators')}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                activeTab === 'regulators'
                  ? 'bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-600/30'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
            >
              For Regulators
            </button>
          </motion.div>
        </motion.div>

        {/* Main Process Flow */}
        <div className="relative">
          {/* Central Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent transform -translate-y-1/2" />
          
          {/* Steps Grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === steps.length - 1
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-primary-400/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary-500/20 ${isEven ? 'lg:mt-0' : 'lg:mt-16'}`}>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg border-2 border-gray-800">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>

                    {/* Icon Container */}
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-primary-200 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>

                    {/* Tech Indicators */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                      <span className="text-xs text-gray-500 font-mono">PROCESSING</span>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-white">
                          <path d="M8 1L10 4L8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Tech Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Processing Speed', value: '< 2s', unit: 'avg response' },
            { label: 'Data Accuracy', value: '99.9%', unit: 'validation rate' },
            { label: 'System Uptime', value: '99.99%', unit: 'availability' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-3xl font-bold text-primary-400 mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.unit}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary-500/20 to-brand-500/20 backdrop-blur-sm rounded-2xl border border-primary-400/30">
            <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-white font-semibold text-lg tracking-wide">
              Ready to revolutionize your compliance workflow?
            </span>
            <div className="w-3 h-3 bg-brand-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

