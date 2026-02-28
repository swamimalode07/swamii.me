import React, { useEffect, useRef, useState } from 'react'

interface RulerLinesProps {
  variant?: 'left' | 'right'
}

const RulerLines = ({ variant = 'left' }: RulerLinesProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const update = () => {
      if (ref.current?.parentElement) {
        setHeight(ref.current.parentElement.getBoundingClientRect().height)
      }
    }
    update()
    const ro = new ResizeObserver(update)
    if (ref.current?.parentElement) ro.observe(ref.current.parentElement)
    return () => ro.disconnect()
  }, [])

  const majorInterval = 100
  const minorInterval = 10
  const width = 30

  const ticks = []

  if (height > 0) {
    for (let y = 0; y <= height; y += minorInterval) {
      const isMajor = y % majorInterval === 0
      const isMid = y % 50 === 0 && !isMajor
      const tickWidth = isMajor ? 16 : isMid ? 8 : 8

      // Left ruler: baseline on RIGHT edge, ticks grow leftward (outward)
      // Right ruler: baseline on LEFT edge, ticks grow rightward (outward)
      const baselineX = variant === 'left' ? width : 0
      const x1 = baselineX
      const x2 = variant === 'left' ? width - tickWidth : tickWidth

      ticks.push(
        <line
          key={y}
          x1={x1}
          y1={y}
          x2={x2}
          y2={y}
          stroke="#424244"
          strokeWidth={1}
        />
      )
    }
  }

  const baselineX = variant === 'left' ? width : 0

  return (
    <div
      ref={ref}
      className="hidden md:block"
      style={{
        position: 'relative',
        top: 0,
        [variant]: 0,
        height: '100%',
        width,
        background: 'black',
        userSelect: 'none',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <svg width={width} height={height} style={{ display: 'block' }}>
        <line x1={baselineX} y1={0} x2={baselineX} y2={height} stroke="#424244" strokeWidth={1} />
        {ticks}
      </svg>
    </div>
  )
}

export default RulerLines