"use client"

import React, { useEffect, useState } from "react"
import GitHubCalendar from "react-github-calendar"

const Graph = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  return (
    <div className="bg-black flex justify-center p-4 w-full overflow-x-auto px-[4%] py-10 md:py-15">
      <div className="w-full flex justify-center">
        <GitHubCalendar
          username="swamimalode07"
          blockRadius={4}
          blockSize={isMobile ? 10 : 20}
          blockMargin={isMobile ? 3 : 10}
          fontSize={isMobile ? 10 : 14}
          theme={{
            dark: ['#2a2a2a', '#909090', '#b8b8b8', '#dedede', '#ffffff'],
          }}
          colorScheme="dark"
        />
      </div>
    </div>
  )
}

export default Graph