import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import type { ThreeElements } from '@react-three/fiber'

type WallProps = ThreeElements['group'] & {
    isFloor?: boolean
    isCeiling?: boolean
    width?: number
    height?: number
}

export function Model({ isFloor = false, isCeiling = false, width = 10, height = 10, ...props }: WallProps) {
    // Load the correct texture based on isFloor
    const texturePath = isFloor
        ? '/textures/rubber_tiles_diff_2k.jpg'
        : '/textures/concrete_wall_007_diff_2k.jpg'

    const texture = useTexture(texturePath)

    // Repeat the texture so it doesn't look stretched
    const repeatX = Math.max(1, width / 5)
    // For walls (not floor), we might want vertical repetition to look different? 
    // Keeping uniform for now.
    const repeatY = Math.max(1, height / 5)

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(repeatX, repeatY)

    return (
        <group {...props} dispose={null}>
            <mesh>
                <boxGeometry args={[width, height, 0.2]} />
                {isFloor ? (
                    // Using StandardMaterial for floor to ensure visibility (fix black hole issue)
                    <meshStandardMaterial
                        map={texture}
                        color="#070707ff"
                        roughness={0.8}
                        metalness={0.1}
                        side={THREE.DoubleSide}
                    />
                ) : isCeiling ? (
                    <meshStandardMaterial
                        color="#ffffff" /* Pure White Ceiling */
                        roughness={0.5} /* Slight sheen like paint/plaster */
                        side={THREE.DoubleSide}
                    />
                ) : (
                    <meshStandardMaterial
                        map={texture}
                        color="#ffffff" /* Painted White Concrete Wall */
                        roughness={0.9}
                        side={THREE.DoubleSide}
                    />
                )}
            </mesh>
        </group>
    )
}
