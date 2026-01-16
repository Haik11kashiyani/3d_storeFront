import { Model as Wall } from './Wall'


// Massive Store Room: 100m Wide x 120m Deep x 40m High
export function StoreRoom() {
    return (
        <group>
            {/* Back Wall (At z = -60) - 100m wide, 40m high */}
            <Wall
                position={[0, 0, -60]}
                width={100}
                height={40}
            />

            {/* Left Wall (At x = -50) - 120m long, 40m high */}
            <Wall
                position={[-50, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                width={120}
                height={40}
            />

            {/* Right Wall (At x = 50) - 120m long, 40m high */}
            <Wall
                position={[50, 0, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                width={120}
                height={40}
            />

            {/* Floor (At y = -20) - 100m wide, 120m deep */}
            <Wall
                position={[0, -20, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                width={100}
                height={120}
                isFloor
            />

            {/* Ceiling (At y = 20) - 100m wide, 120m deep */}
            <Wall
                position={[0, 20, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                width={100}
                height={120}
                isCeiling
            />

            {/* --- SHELVING UNITS --- */}

            {/* --- SKIRTING BOARDS (Floor trim) --- */}
            <mesh position={[0, -19.5, -59.5]} receiveShadow>
                <boxGeometry args={[100, 1, 0.5]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>
            <mesh position={[-49.5, -19.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
                <boxGeometry args={[120, 1, 0.5]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>
            <mesh position={[49.5, -19.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
                <boxGeometry args={[120, 1, 0.5]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* --- CORNICES (Ceiling trim) - White to match ceiling --- */}
            <mesh position={[0, 19.5, -59.5]} castShadow>
                <boxGeometry args={[100, 1, 0.5]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[-49.5, 19.5, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
                <boxGeometry args={[120, 1, 0.5]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[49.5, 19.5, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
                <boxGeometry args={[120, 1, 0.5]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>

            {/* --- COLUMNS (Structural support look) - White Painted --- */}
            {/* Left Wall Columns - Reduced count */}
            {[-30, 0, 30].map((zPos, i) => (
                <mesh key={`col-left-${i}`} position={[-49, 0, zPos]} castShadow receiveShadow>
                    <boxGeometry args={[2, 40, 2]} />
                    <meshStandardMaterial color="#ffffff" roughness={0.5} />
                </mesh>
            ))}
            {/* Right Wall Columns - Reduced count */}
            {[-30, 0, 30].map((zPos, i) => (
                <mesh key={`col-right-${i}`} position={[49, 0, zPos]} castShadow receiveShadow>
                    <boxGeometry args={[2, 40, 2]} />
                    <meshStandardMaterial color="#ffffff" roughness={0.5} />
                </mesh>
            ))}
        </group>
    )
}
