'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Calendar, Shield, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const router = useRouter()

  return (
    <footer id="contact" ref={ref} className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24">
              <Image
                src="/logo.png"
                alt="NovaCore Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button 
            onClick={() => router.push('/contact')}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </button>
          <button 
            onClick={() => router.push('/demo')}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-950 hover:bg-brand-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Demo
          </button>
          <button 
            onClick={() => window.open('https://www.termsfeed.com/live/privacy-policy-generator', '_blank')}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Shield className="w-5 h-5" />
            Privacy Policy
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} NovaCore. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

