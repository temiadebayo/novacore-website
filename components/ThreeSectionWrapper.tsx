'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Three.js component to avoid SSR issues
const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gradient-to-b from-gray-900 to-brand-950 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading 3D Experience...</p>
      </div>
    </div>
  ),
})

export default function ThreeSectionWrapper() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Connected Intelligence
            </h2>
            <p className="text-xl md:text-2xl text-primary-200 max-w-3xl mx-auto">
              Real-time data flowing through an intelligent ecosystem
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3D Scene */}
      <Suspense fallback={
        <div className="w-full h-[600px] bg-gradient-to-b from-gray-900 to-brand-950 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      }>
        <ThreeScene />
      </Suspense>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}

