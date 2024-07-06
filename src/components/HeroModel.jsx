import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from '../../public/Cube.jsx'

export default function HeroModel() {
  return (
    <Canvas style={{ height: '80vh' }} camera={{ 
        position: [5, 6, 5], 
        fov: 65,
        near: 0.1,
        far: 1000
      }}
>
        <ambientLight intensity={10} />
        <OrbitControls enableZoom={false} autoRotate={true}  />
      <Suspense fallback={null}>
        <Cube />
      </Suspense>
    </Canvas>
  )
}
