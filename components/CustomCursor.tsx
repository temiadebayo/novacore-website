'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Cursor dot - moves instantly */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className={`rounded-full transition-all duration-200 ${
            isHovering 
              ? 'w-4 h-4 bg-brand-500 shadow-[0_0_15px_#8b5cf6,0_0_30px_#8b5cf6]' 
              : 'w-2.5 h-2.5 bg-primary-500 shadow-[0_0_10px_#3db2f6,0_0_20px_#3db2f6]'
          }`}
        />
      </div>

      {/* Cursor circle - slight delay for effect */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.2,
        }}
      >
        <div 
          className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
            isHovering 
              ? 'border-brand-400/70 scale-150' 
              : 'border-primary-400/50'
          }`}
        />
      </motion.div>
    </>
  )
}

