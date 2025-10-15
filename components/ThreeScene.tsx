'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere, Float } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

// Animated floating sphere
function AnimatedSphere({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.3
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

// Particle field representing data flow
function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particlesCount = 1000
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#3db2f6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Connecting lines representing network
function NetworkLines() {
  const linesRef = useRef<THREE.LineSegments>(null)
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const points = []
    const connections = 50
    
    for (let i = 0; i < connections; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
      points.push(start, end)
    }
    
    geo.setFromPoints(points)
    return geo
  }, [])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#25085d" transparent opacity={0.3} />
    </lineSegments>
  )
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3db2f6" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#25085d" />
      
      {/* Central large sphere */}
      <AnimatedSphere position={[0, 0, 0]} color="#25085d" speed={0.5} />
      
      {/* Orbiting smaller spheres */}
      <AnimatedSphere position={[3, 2, 0]} color="#3db2f6" speed={0.8} />
      <AnimatedSphere position={[-3, -2, 0]} color="#0e408f" speed={0.6} />
      <AnimatedSphere position={[0, 2, 3]} color="#3db2f6" speed={0.7} />
      
      {/* Particle field */}
      <ParticleField />
      
      {/* Network lines */}
      <NetworkLines />
      
      {/* Camera controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}

// Main component
export default function ThreeScene() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-gray-900 to-brand-950">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

