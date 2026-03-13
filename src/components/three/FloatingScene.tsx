import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import type * as THREE from 'three'

function Dice({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const verticalRotation: [number, number, number] = [Math.PI / 2, 0, 0]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={groupRef} position={position} scale={scale}>
        <mesh rotation={verticalRotation} castShadow>
          <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

function Meeple({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={meshRef} position={position} scale={scale}>
        <mesh position={[0, 0.7, 0]} castShadow>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0, 0]} castShadow>
          <coneGeometry args={[0.5, 1, 8]} />
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

function D20({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.5
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.15} />
      </mesh>
    </Float>
  )
}

function SceneContent() {
  const objects = useMemo(() => {
    const jitter = (amount: number) => (Math.random() - 0.5) * amount
    const colors = ['#ea580c', '#f97316', '#115e59', '#0d9488', '#9333ea']

    return [
      {
        type: 'dice',
        position: [-3 + jitter(0.8), 1.5 + jitter(0.6), -1 + jitter(0.5)] as [number, number, number],
        color: colors[0],
        scale: 0.6,
      },
      {
        type: 'dice',
        position: [3.2 + jitter(0.8), -0.8 + jitter(0.6), -2 + jitter(0.5)] as [number, number, number],
        color: colors[2],
        scale: 0.7,
      },
      {
        type: 'meeple',
        position: [-2 + jitter(0.6), -1.3 + jitter(0.6), 0 + jitter(0.4)] as [number, number, number],
        color: colors[1],
        scale: 0.8,
      },
      {
        type: 'meeple',
        position: [2 + jitter(0.6), 1.4 + jitter(0.6), -1.5 + jitter(0.4)] as [number, number, number],
        color: colors[4],
        scale: 0.6,
      },
      {
        type: 'd20',
        position: [0.5 + jitter(0.5), -1.6 + jitter(0.5), 0 + jitter(0.4)] as [number, number, number],
        color: colors[0],
        scale: 1,
      },
      {
        type: 'd20',
        position: [-3.4 + jitter(0.5), -0.4 + jitter(0.5), -2 + jitter(0.4)] as [number, number, number],
        color: colors[4],
        scale: 0.7,
      },
      {
        type: 'dice',
        position: [4.5 + jitter(0.4), 1.2 + jitter(0.4), -3 + jitter(0.4)] as [number, number, number],
        color: colors[3],
        scale: 0.5,
      },
      {
        type: 'meeple',
        position: [-4 + jitter(0.6), 2.5 + jitter(0.6), -2 + jitter(0.4)] as [number, number, number],
        color: colors[1],
        scale: 0.5,
      },
    ]
  }, [])

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <pointLight position={[-5, 3, 2]} intensity={0.4} color="#f97316" />
      <pointLight position={[5, -2, 3]} intensity={0.3} color="#9333ea" />

      {objects.map((obj, i) => {
        switch (obj.type) {
          case 'dice':
            return <Dice key={i} position={obj.position} color={obj.color} scale={obj.scale} />
          case 'meeple':
            return <Meeple key={i} position={obj.position} color={obj.color} scale={obj.scale} />
          case 'd20':
            return <D20 key={i} position={obj.position} color={obj.color} scale={obj.scale} />
          default:
            return null
        }
      })}

      <Environment preset="city" />
    </>
  )
}

export function FloatingScene() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}
