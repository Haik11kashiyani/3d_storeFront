import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, OrbitControls, SoftShadows } from '@react-three/drei'
import { StoreRoom } from './assets/components/StoreRoom'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#151515' }}>
      {/* Camera at z=50, y=-10 (10m above floor) - Higher vantage point */}
      <Canvas shadows camera={{ position: [0, -10, 50], fov: 75 }}>
        {/* 1. Global Illumination - High Visibility */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={3} castShadow />

        <SoftShadows size={40} samples={16} focus={0.5} />

        {/* Main overhead strip light - Super Bright */}
        <rectAreaLight          width={80}
          height={100}
          color="#ffffff"
          intensity={50}
          position={[0, 19, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />

        {/* Warm accent at back */}
        <spotLight
          position={[30, 0, -40]}
          angle={0.6}
          penumbra={1}
          intensity={100}
          color="#ffeedd"
          castShadow
        />

        {/* Cool filler at front */}
        <pointLight position={[-30, -10, 40]} intensity={50} color="#ccddee" />

        <Environment preset="city" blur={1} />

        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <StoreRoom />
          </group>
        </Suspense>

        <OrbitControls
          target={[0, -10, 0]} /* Look at center at y=-10 */
          maxPolarAngle={Math.PI / 1.8}
          minDistance={1}
          maxDistance={80}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}