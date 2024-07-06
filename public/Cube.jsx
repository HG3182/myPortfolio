import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshPhysicalMaterial } from 'three'

export default function Model(props) {
  const { nodes } = useGLTF('/cube.gltf')

  // Function to create a glass-like material with a specific color
  const createGlassMaterial = (color) => {
    return new MeshPhysicalMaterial({
      color: color,
      transparent: true,
      opacity: 0.7,
      roughness: 0.1,
      transmission: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    })
  }

  // Create materials with different colors
  const materials = [
    createGlassMaterial('#FF33A1'), // Neon Pink
    createGlassMaterial('#00FFFF'), // Cyan
    createGlassMaterial('#7B68EE'), // Medium Slate Blue
    createGlassMaterial('#FF6B6B'), // Light Coral
    createGlassMaterial('#50C878'), // Emerald Green
    createGlassMaterial('#FFD700'), // Gold
    createGlassMaterial('#9370DB'), // Medium Purple
    createGlassMaterial('#00FA9A'), // Medium Spring Green
  ]

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials[0]} position={[-1.11, 0, -1.159]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials[1]} position={[1.11, 0, 1.11]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials[2]} position={[1.127, 2.107, -1.143]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials[3]} position={[-1.11, 2.107, 1.11]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials[4]} position={[1.078, 2.085, 1.097]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials[5]} position={[-1.117, 2.085, -1.156]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials[6]} position={[-1.097, -0.012, 1.097]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials[7]} position={[1.101, -0.015, -1.157]} />
    </group>
  )
}

useGLTF.preload('/cube.gltf')