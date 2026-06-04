"use c"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { Text } from "@rea"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const TECHS = [
  "React", "Next.js", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "TypeScript", "Tailwind", "Redux", "Socket.io",
  "Prisma", "Git", "Docker", "Vercel", "HTML5", "CSS3",
];

const COLORS = [0x00f5c8, 0x7c3aed, 0xf59e0b, 0x3b82f6, 0xec4899, 0x10b981];

function SpherePoints({ isDragging }: { isDragging: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current || isDragging) return;
    groupRef.current.rotation.y += 0.004;
    groupRef.current.rotation.x += 0.001;
  });

  const points = TECHS.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / TECHS.length);
    const theta = Math.sqrt(TECHS.length * Math.PI) * phi;
    const r = 2.5;
    return new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 24, 24]} />
        <meshBasicMaterial color={0x00f5c8} transparent opacity={0.04} wireframe />
      </mesh>

      {/* Core */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color={0x00f5c8} transparent opacity={0.15} wireframe />
      </mesh>

      {/* Tech nodes */}
      {points.map((pos, i) => (
        <group key={TECHS[i]} position={pos}>
          <mesh>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.9} />
          </mesh>
          <Text
            position={[0, 0.18, 0]}
            fontSize={0.14}
            color={`#${COLORS[i % COLORS.length].toString(16).padStart(6, "0")}`}
            anchorX="center"
            anchorY="middle"
          >
            {TECHS[i]}
          </Text>
        </group>
      ))}

      {/* Lines from center */}
      {points.map((pos, i) => {
        const linePoints = [new THREE.Vector3(0, 0, 0), pos];
        const geo = new THREE.BufferGeometry().setFromPoints(linePoints);
        return (
          <line key={`line-${i}`} geometry={geo}>
            <lineBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.08} />
          </line>
        );
      })}
    </group>
  );
}

function Scene() {
  const [isDragging, setIsDragging] = useState(false);
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const groupRef = useRef<THREE.Group>(null);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    setIsDragging(true);
    setPrevMouse({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!isDragging) return;
    const dx = e.clientX - prevMouse.x;
    const dy = e.clientY - prevMouse.y;
    setRotation((r) => ({ x: r.x + dy * 0.01, y: r.y + dx * 0.01 }));
    setPrevMouse({ x: e.clientX, y: e.clientY });
    if (groupRef.current) {
      groupRef.current.rotation.x = rotation.x;
      groupRef.current.rotation.y = rotation.y;
    }
  };

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
    >
      <SpherePoints isDragging={isDragging} />
    </group>
  );
}

export default function TechSphere() {
  return (
    <div className="relative h-[400px] border border-white/5 bg-dark2 cursor-grab active:cursor-grabbing overflow-hidden">
      <div className="absolute top-3 left-3 font-mono text-[0.65rem] text-[var(--muted)] tracking-[0.15em] uppercase z-10 pointer-events-none">
        Tech Sphere — Drag to Rotate
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[0.65rem] text-[var(--muted)] tracking-[0.1em] opacity-50 z-10 pointer-events-none">
        Interactive 3D
      </div>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
    </div>
  );
}
    groupRef.current.rotation.x += 0.001;
  });

  const points = TECHS.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / TECHS.length);
    const theta = Math.sqrt(TECHS.length * Math.PI) * phi;
    const r = 2.5;
    return new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 24, 24]} />
        <meshBasicMaterial color={0x00f5c8} transparent opacity={0.04} wireframe />
      </mesh>

      {/* Core */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color={0x00f5c8} transparent opacity={0.15} wireframe />
      </mesh>

      {/* Tech nodes */}
      {points.map((pos, i) => (
        <group key={TECHS[i]} position={pos}>
          <mesh>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.9} />
          </mesh>
          <Text
            position={[0, 0.18, 0]}
            fontSize={0.14}
            color={`#${COLORS[i % COLORS.length].toString(16).padStart(6, "0")}`}
            anchorX="center"
            anchorY="middle"
          >
            {TECHS[i]}
          </Text>
        </group>
      ))}

      {/* Lines from center */}
      {points.map((pos, i) => {
        const linePoints = [new THREE.Vector3(0, 0, 0), pos];
        const geo = new THREE.BufferGeometry().setFromPoints(linePoints);
        return (
          <line key={`line-${i}`} geometry={geo}>
            <lineBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.08} />
          </line>
        );
      })}
    </group>
  );
}

function Scene() {
  const [isDragging, setIsDragging] = useState(false);
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const groupRef = useRef<THREE.Group>(null);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    setIsDragging(true);
    setPrevMouse({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!isDragging) return;
    const dx = e.clientX - prevMouse.x;
    const dy = e.clientY - prevMouse.y;
    setRotation((r) => ({ x: r.x + dy * 0.01, y: r.y + dx * 0.01 }));
    setPrevMouse({ x: e.clientX, y: e.clientY });
    if (groupRef.current) {
      groupRef.current.rotation.x = rotation.x;
      groupRef.current.rotation.y = rotation.y;
    }
  };

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
    >
      <SpherePoints isDragging={isDragging} />
    </group>
  );
}

export default function TechSphere() {
  return (
    <div className="relative h-[400px] border border-white/5 bg-dark2 cursor-grab active:cursor-grabbing overflow-hidden">
      <div className="absolute top-3 left-3 font-mono text-[0.65rem] text-[var(--muted)] tracking-[0.15em] uppercase z-10 pointer-events-none">
        Tech Sphere — Drag to Rotate
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[0.65rem] text-[var(--muted)] tracking-[0.1em] opacity-50 z-10 pointer-events-none">
        Interactive 3D
      </div>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
    </div>
  );
}* phi;
    const r = 2.5;
    return new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 24, 24]} />
        <meshBasicMaterial color={0x00f5c8} transparent opacity={0.04} wireframe />
      </mesh>

      {/* Core */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color={0x00f5c8} transparent opacity={0.15} wireframe />
      </mesh>

      {/* Tech nodes */}
      {points.map((pos, i) => (
        <group key={TECHS[i]} position={pos}>
          <mesh>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.9} />
          </mesh>
          <Text
            position={[0, 0.18, 0]}
            fontSize={0.14}
            color={`#${COLORS[i % COLORS.length].toString(16).padStart(6, "0")}`}
            anchorX="center"
            anchorY="middle"
          >
            {TECHS[i]}
          </Text>
        </group>
      ))}

      {/* Lines from center */}
      {points.map((pos, i) => {
        const linePoints = [new THREE.Vector3(0, 0, 0), pos];
        const geo = new THREE.BufferGeometry().setFromPoints(linePoints);
        return (
          <line key={`line-${i}`} geometry={geo}>
            <lineBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.08} />
          </line>
        );
      })}
    </group>
  );
}

function Scene() {
  const [isDragging, setIsDragging] = useState(false);
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const groupRef = useRef<THREE.Group>(null);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    setIsDragging(true);
    setPrevMouse({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!isDragging) return;
    const dx = e.clientX - prevMouse.x;
    const dy = e.clientY - prevMouse.y;
    setRotation((r) => ({ x: r.x + dy * 0.01, y: r.y + dx * 0.01 }));
    setPrevMouse({ x: e.clientX, y: e.clientY });
    if (groupRef.current) {
      groupRef.current.rotation.x = rotation.x;
      groupRef.current.rotation.y = rotation.y;
    }
  };

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
    >
      <SpherePoints isDragging={isDragging} />
    </group>
  );
}

export default function TechSphere() {
  return (
    <div className="relative h-[400px] border border-white/5 bg-dark2 cursor-grab active:cursor-grabbing overflow-hidden">
      <div className="absolute top-3 left-3 font-mono text-[0.65rem] text-[var(--muted)] tracking-[0.15em] uppercase z-10 pointer-events-none">
        Tech Sphere — Drag to Rotate
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[0.65rem] text-[var(--muted)] tracking-[0.1em] opacity-50 z-10 pointer-events-none">
        Interactive 3D
      </div>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
    </div>
  );
}
    const phi = Math.acos(-1 + (2 * i) / TECHS.length);
    const theta = Math.sqrt(TECHS.length * Math.PI) * phi;
    const r = 2.5;
    return new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 24, 24]} />
        <meshBasicMaterial color={0x00f5c8} transparent opacity={0.04} wireframe />
      </mesh>

      {/* Core */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color={0x00f5c8} transparent opacity={0.15} wireframe />
      </mesh>

      {/* Tech nodes */}
      {points.map((pos, i) => (
        <group key={TECHS[i]} position={pos}>
          <mesh>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.9} />
          </mesh>
          <Text
            position={[0, 0.18, 0]}
            fontSize={0.14}
            color={`#${COLORS[i % COLORS.length].toString(16).padStart(6, "0")}`}
            anchorX="center"
            anchorY="middle"
          >
            {TECHS[i]}
          </Text>
        </group>
      ))}

      {/* Lines from center */}
      {points.map((pos, i) => {
        const linePoints = [new THREE.Vector3(0, 0, 0), pos];
        const geo = new THREE.BufferGeometry().setFromPoints(linePoints);
        return (
          <line key={`line-${i}`} geometry={geo}>
            <lineBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.08} />
          </line>
        );
      })}
    </group>
  );
}

function Scene() {
  const [isDragging, setIsDragging] = useState(false);
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const groupRef = useRef<THREE.Group>(null);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    setIsDragging(true);
    setPrevMouse({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!isDragging) return;
    const dx = e.clientX - prevMouse.x;
    const dy = e.clientY - prevMouse.y;
    setRotation((r) => ({ x: r.x + dy * 0.01, y: r.y + dx * 0.01 }));
    setPrevMouse({ x: e.clientX, y: e.clientY });
    if (groupRef.current) {
      groupRef.current.rotation.x = rotation.x;
      groupRef.current.rotation.y = rotation.y;
    }
  };

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
    >
      <SpherePoints isDragging={isDragging} />
    </group>
  );
}

export default function TechSphere() {
  return (
    <div className="relative h-[400px] border border-white/5 bg-dark2 cursor-grab active:cursor-grabbing overflow-hidden">
      <div className="absolute top-3 left-3 font-mono text-[0.65rem] text-[var(--muted)] tracking-[0.15em] uppercase z-10 pointer-events-none">
        Tech Sphere — Drag to Rotate
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[0.65rem] text-[var(--muted)] tracking-[0.1em] opacity-50 z-10 pointer-events-none">
        Interactive 3D
      </div>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
    </div>
  );
}

const TECHS = [
  "React", "Next.js", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "TypeScript", "Tailwind", "Redux", "Socket.io",
  "Prisma", "Git", "Docker", "Vercel", "HTML5", "CSS3",
];

const COLORS = [0x00f5c8, 0x7c3aed, 0xf59e0b, 0x3b82f6, 0xec4899, 0x10b981];

function SpherePoints({ isDragging }: { isDragging: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current || isDragging) return;
    groupRef.current.rotation.y += 0.004;
    groupRef.current.rotation.x += 0.001;
  });

  const points = TECHS.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / TECHS.length);
    const theta = Math.sqrt(TECHS.length * Math.PI) * phi;
    const r = 2.5;
    return new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 24, 24]} />
        <meshBasicMaterial color={0x00f5c8} transparent opacity={0.04} wireframe />
      </mesh>

      {/* Core */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color={0x00f5c8} transparent opacity={0.15} wireframe />
      </mesh>

      {/* Tech nodes */}
      {points.map((pos, i) => (
        <group key={TECHS[i]} position={pos}>
          <mesh>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.9} />
          </mesh>
          <Text
            position={[0, 0.18, 0]}
            fontSize={0.14}
            color={`#${COLORS[i % COLORS.length].toString(16).padStart(6, "0")}`}
            anchorX="center"
            anchorY="middle"
          >
            {TECHS[i]}
          </Text>
        </group>
      ))}

      {/* Lines from center */}
      {points.map((pos, i) => {
        const linePoints = [new THREE.Vector3(0, 0, 0), pos];
        const geo = new THREE.BufferGeometry().setFromPoints(linePoints);
        return (
          <line key={`line-${i}`} geometry={geo}>
            <lineBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.08} />
          </line>
        );
      })}
    </group>
  );
}

function Scene() {
  const [isDragging, setIsDragging] = useState(false);
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const groupRef = useRef<THREE.Group>(null);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    setIsDragging(true);
    setPrevMouse({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!isDragging) return;
    const dx = e.clientX - prevMouse.x;
    const dy = e.clientY - prevMouse.y;
    setRotation((r) => ({ x: r.x + dy * 0.01, y: r.y + dx * 0.01 }));
    setPrevMouse({ x: e.clientX, y: e.clientY });
    if (groupRef.current) {
      groupRef.current.rotation.x = rotation.x;
      groupRef.current.rotation.y = rotation.y;
    }
  };

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
    >
      <SpherePoints isDragging={isDragging} />
    </group>
  );
}

export default function TechSphere() {
  return (
    <div className="relative h-[400px] border border-white/5 bg-dark2 cursor-grab active:cursor-grabbing overflow-hidden">
      <div className="absolute top-3 left-3 font-mono text-[0.65rem] text-[var(--muted)] tracking-[0.15em] uppercase z-10 pointer-events-none">
        Tech Sphere — Drag to Rotate
      </d
  );
}



































// "use client";
// import { useRef, useState } from "react";
// import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
// import { Text } from "@react-three/drei";
// import * as THREE from "three";

// const TECHS = [
//   "React", "Next.js", "Node.js", "Express", "MongoDB",
//   "PostgreSQL", "TypeScript", "Tailwind", "Redux", "Socket.io",
//   "Prisma", "Git", "Docker", "Vercel", "HTML5", "CSS3",
// ];

// const COLORS = [0x00f5c8, 0x7c3aed, 0xf59e0b, 0x3b82f6, 0xec4899, 0x10b981];

// function SpherePoints({ isDragging }: { isDragging: boolean }) {
//   const groupRef = useRef<THREE.Group>(null);

//   useFrame(() => {
//     if (!groupRef.current || isDragging) return;
//     groupRef.current.rotation.y += 0.004;
//     groupRef.current.rotation.x += 0.001;
//   });

//   const points = TECHS.map((_, i) => {
//     const phi = Math.acos(-1 + (2 * i) / TECHS.length);
//     const theta = Math.sqrt(TECHS.length * Math.PI) * phi;
//     const r = 2.5;
//     return new THREE.Vector3(
//       r * Math.sin(phi) * Math.cos(theta),
//       r * Math.sin(phi) * Math.sin(theta),
//       r * Math.cos(phi)
//     );
//   });

//   return (
//     <group ref={groupRef}>
//       {/* Wireframe sphere */}
//       <mesh>
//         <sphereGeometry args={[2.5, 24, 24]} />
//         <meshBasicMaterial color={0x00f5c8} transparent opacity={0.04} wireframe />
//       </mesh>

//       {/* Core */}
//       <mesh>
//         <sphereGeometry args={[0.3, 32, 32]} />
//         <meshBasicMaterial color={0x00f5c8} transparent opacity={0.15} wireframe />
//       </mesh>

//       {/* Tech nodes */}
//       {points.map((pos, i) => (
//         <group key={TECHS[i]} position={pos}>
//           <mesh>
//             <sphereGeometry args={[0.08, 8, 8]} />
//             <meshBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.9} />
//           </mesh>
//           <Text
//             position={[0, 0.18, 0]}
//             fontSize={0.14}
//             color={`#${COLORS[i % COLORS.length].toString(16).padStart(6, "0")}`}
//             anchorX="center"
//             anchorY="middle"
//           >
//             {TECHS[i]}
//           </Text>
//         </group>
//       ))}

//       {/* Lines from center */}
//       {points.map((pos, i) => {
//         const linePoints = [new THREE.Vector3(0, 0, 0), pos];
//         const geo = new THREE.BufferGeometry().setFromPoints(linePoints);
//         return (
//           <line key={`line-${i}`} geometry={geo}>
//             <lineBasicMaterial color={COLORS[i % COLORS.length]} transparent opacity={0.08} />
//           </line>
//         );
//       })}
//     </group>
//   );
// }

// function Scene() {
//   const [isDragging, setIsDragging] = useState(false);
//   const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 });
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });
//   const groupRef = useRef<THREE.Group>(null);

//   const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
//     setIsDragging(true);
//     setPrevMouse({ x: e.clientX, y: e.clientY });
//   };

//   const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
//     if (!isDragging) return;
//     const dx = e.clientX - prevMouse.x;
//     const dy = e.clientY - prevMouse.y;
//     setRotation((r) => ({ x: r.x + dy * 0.01, y: r.y + dx * 0.01 }));
//     setPrevMouse({ x: e.clientX, y: e.clientY });
//     if (groupRef.current) {
//       groupRef.current.rotation.x = rotation.x;
//       groupRef.current.rotation.y = rotation.y;
//     }
//   };

//   return (
//     <group
//       ref={groupRef}
//       onPointerDown={handlePointerDown}
//       onPointerMove={handlePointerMove}
//       onPointerUp={() => setIsDragging(false)}
//       onPointerLeave={() => setIsDragging(false)}
//     >
//       <SpherePoints isDragging={isDragging} />
//     </group>
//   );
// }

// export default function TechSphere() {
//   return (
//     <div className="relative h-[400px] border border-white/5 bg-dark2 cursor-grab active:cursor-grabbing overflow-hidden">
//       <div className="absolute top-3 left-3 font-mono text-[0.65rem] text-[var(--muted)] tracking-[0.15em] uppercase z-10 pointer-events-none">
//         Tech Sphere — Drag to Rotate
//       </div>
//       <div className="absolute bottom-3 right-3 font-mono text-[0.65rem] text-[var(--muted)] tracking-[0.1em] opacity-50 z-10 pointer-events-none">
//         Interactive 3D
//       </div>
//       <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Scene />
//       </Canvas>
//     </div>
//   );
// }
