"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"

function NumberDrop({
  x,
  y,
  number,
  landed,
  rotation = 0,
}: {
  x: number
  y: number
  number: number
  landed: boolean
  rotation?: number
}) {
  return (
    <div
      className="absolute pointer-events-none font-bold text-4xl"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        color: "rgb(255, 255, 255)",
        textShadow: landed ? "0 2px 4px rgba(255, 255, 255, 0.2)" : "none",
        opacity: landed ? 1 : 0.9,
        transition: landed ? "opacity 0.3s ease" : "none",
        fontFamily: "'Space Grotesk', sans-serif",
        letterSpacing: "-0.02em",
      }}
    >
      {number}
    </div>
  )
}

function Drop({ x, y, landed }: { x: number; y: number; landed: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        left: `${x - 8}px`,
        top: `${y - 8}px`,
        transition: landed ? "opacity 0.3s ease-out" : "none",
        opacity: landed ? 0.8 : 1,
        filter: landed
          ? "drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))"
          : "drop-shadow(0 1px 2px rgba(59, 130, 246, 0.2))",
      }}
    >
      <defs>
        <linearGradient id="dropGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
        </linearGradient>
      </defs>

      <path
        d="M 8 2 C 8 2 6 5 6 7 C 6 9.2 7 11 8 11 C 9 11 10 9.2 10 7 C 10 5 8 2 8 2 Z"
        fill="url(#dropGradient)"
        stroke="#0284c7"
        strokeWidth="0.5"
      />

      <ellipse cx="7.5" cy="5" rx="1.2" ry="1.5" fill="white" opacity="0.4" />
    </svg>
  )
}

interface DropData {
  id: number
  x: number
  y: number
  vy: number
  vx: number
  landed: boolean
  restCount: number
  number: number
}

const GRAVITY = 0.8
const DROP_SIZE = 32
const DROP_RADIUS = DROP_SIZE / 2
const FRICTION = 0.88
const COLLISION_DISTANCE = DROP_SIZE + 2
const BOUNCE_DAMPING = 0.72
const AIR_RESISTANCE = 0.98

function DropsContainer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [drops, setDrops] = useState<DropData[]>([])
  const dropsRef = useRef<DropData[]>([])
  const dropIdRef = useRef(0)
  const rotationRef = useRef<Map<number, number>>(new Map())

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const numbers = [4, 0, 4]
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)]

    const newDrop: DropData = {
      id: dropIdRef.current++,
      x,
      y,
      vy: 0,
      vx: (Math.random() - 0.5) * 6,
      landed: false,
      restCount: 0,
      number: randomNumber,
    }

    dropsRef.current.push(newDrop)
    rotationRef.current.set(newDrop.id, 0)
    setDrops([...dropsRef.current])
  }

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.offsetWidth
    const height = container.offsetHeight

    let animationFrameId: number

    const simulate = () => {
      dropsRef.current = dropsRef.current.map((drop, idx) => {
        let { x, y, vy, vx, restCount } = drop
        vy += GRAVITY
        y += vy
        x += vx
        vx *= FRICTION
        vy *= AIR_RESISTANCE

        const currentRotation = rotationRef.current.get(drop.id) || 0
        rotationRef.current.set(drop.id, currentRotation + vx * 2)

        if (x < DROP_RADIUS) {
          x = DROP_RADIUS
          vx = Math.abs(vx) * BOUNCE_DAMPING
        }
        if (x > width - DROP_RADIUS) {
          x = width - DROP_RADIUS
          vx = -Math.abs(vx) * BOUNCE_DAMPING
        }

        let onSurface = false
        dropsRef.current.forEach((other, otherIdx) => {
          if (idx === otherIdx) return
          const dx = other.x - x
          const dy = other.y - y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < COLLISION_DISTANCE) {
            if (dy > 0 && dy < DROP_SIZE * 1.5) {
              onSurface = true
              if (Math.abs(vx) < 0.1 && Math.abs(vy) < 0.1) restCount++
              else restCount = 0

              const angle = Math.atan2(dy, dx)
              x = other.x - Math.cos(angle) * COLLISION_DISTANCE
              y = other.y - Math.sin(angle) * COLLISION_DISTANCE

              if (vy > 0.5) vy = -vy * BOUNCE_DAMPING
              else vy = 0

              vx *= 0.93
            }
          }
        })

        if (y >= height - DROP_RADIUS) {
          onSurface = true
          y = height - DROP_RADIUS
          if (vy > 1) vy = -vy * BOUNCE_DAMPING
          else vy = 0
          if (Math.abs(vx) < 0.05) {
            vx = 0
            restCount++
          } else restCount = 0
          vx *= 0.9
        }

        if (!onSurface) restCount = 0

        return { ...drop, x, y, vy, vx, landed: restCount > 10, restCount }
      })

      setDrops([...dropsRef.current])
      animationFrameId = requestAnimationFrame(simulate)
    }

    animationFrameId = requestAnimationFrame(simulate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="w-full h-full bg-black relative cursor-crosshair select-none overflow-hidden"
    >
      {drops.map((drop) => (
        <NumberDrop
          key={drop.id}
          x={drop.x}
          y={drop.y}
          number={drop.number}
          landed={drop.landed}
          rotation={rotationRef.current.get(drop.id) || 0}
        />
      ))}
    </div>
  )
}

export default function NotFound() {
  return (
    <main className="w-full h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <DropsContainer />
      </div>

      <div className="relative z-10 text-center max-w-md font-space-grotesk">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-2 tracking-tight">
          404
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-2 font-light">
          Page Not Found
        </p>
        <p className="text-sm text-gray-400 mb-6 mt-4">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-colors"
        >
          Go Home
        </Link>
      </div>

      <p className="absolute top-8 text-sm text-gray-400 z-10 animate-bounce select-none">
        Click anywhere to drop a 404
      </p>
    </main>
  )
}
