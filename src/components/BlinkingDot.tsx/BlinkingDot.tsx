import React from "react"

type StatusColor = "green" | "red" | "yellow" | "neutral"

const colorMap: Record<StatusColor, string> = {
  green: "text-green-500",
  red: "text-red-500",
  yellow: "text-yellow-500",
  neutral: "text-neutral-700",
}

interface StatusDotProps {
  color?: StatusColor
}

export default function StatusDot({ color = "green" }: StatusDotProps) {
  return (
    <div className={`relative flex items-center justify-center ${colorMap[color]}`}>
      <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-current opacity-70"></span>
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-current"></span>
    </div>
  )
}