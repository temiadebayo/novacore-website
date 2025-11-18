'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Database, BarChart3, Lock, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    alt: 'Oil and gas platform',
    title: 'Upstream Operations'
  },
  {
    url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    alt: 'Power generation facility',
    title: 'Power Generation'
  },
  {
    url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    alt: 'Energy infrastructure',
    title: 'Energy Infrastructure'
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    alt: 'Compliance documentation',
    title: 'Regulatory Compliance'
  },
  {
    url: 'https://images.unsplash.com/photo-1565374392797-f3aae7bd5c16?w=800&q=80',
    alt: 'Oil refinery',
    title: 'Downstream Processing'
  },
  {
    url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
    alt: 'Wind and solar energy',
    title: 'Renewable Energy'
  }
]

export default function ImageSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const features = [
    { icon: Database, label: 'Real-Time Data' },
    { icon: BarChart3, label: 'Analytics Dashboard' },
    { icon: Lock, label: 'Secure & Compliant' },
    { icon: Zap, label: 'Lightning Fast' }
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
  }

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
              {/* Carousel Container */}
              <div className="relative aspect-[4/3] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={carouselImages[currentIndex].url}
                      alt={carouselImages[currentIndex].alt}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Image title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold mb-1">
                        {carouselImages[currentIndex].title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {carouselImages[currentIndex].alt}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 bg-white'
                          : 'w-2 bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display font-semibold tracking-tight text-gray-900 mb-6">
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

            <button 
              onClick={() => {
                const featuresSection = document.getElementById('features')
                featuresSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-brand-950 text-white rounded-lg font-semibold hover:bg-brand-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Features
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

