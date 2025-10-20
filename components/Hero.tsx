'use client'

import { ArrowRight, Sparkles, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Hero() {
  const router = useRouter()

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-950 via-primary-900 to-brand-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-900/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm text-white font-medium">Insights, Amplified</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-semibold text-white mb-6 tracking-tight leading-tight"
            >
              Real-Time Compliance for Africa&apos;s Energy Future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-primary-100 mb-8 leading-relaxed"
            >
              Transform traditional oversight into intelligent, collaborative compliance. NovaCore unifies regulators, operators, and stakeholders through one powerful platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button 
                onClick={() => router.push('/demo')}
                className="group px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  const aboutSection = document.getElementById('about')
                  aboutSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Get Started
              </button>
            </motion.div>

          </div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Dashboard mockup */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white font-semibold text-lg">NovaCore Dashboard</div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-500/20 backdrop-blur-sm rounded-xl p-4 border border-primary-300/30">
                    <Shield className="w-8 h-8 text-primary-300 mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">98.5%</div>
                    <div className="text-xs text-primary-200">Compliance Rate</div>
                  </div>
                  <div className="bg-primary-500/20 backdrop-blur-sm rounded-xl p-4 border border-primary-300/30">
                    <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">+12%</div>
                    <div className="text-xs text-primary-200">This Month</div>
                  </div>
                </div>

                {/* List items */}
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/30 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary-200" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-white/20 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-white/10 rounded w-1/2"></div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-primary-500 rounded-xl p-4 shadow-xl"
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <Shield className="w-8 h-8 text-brand-950" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

