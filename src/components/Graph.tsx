"use client"

import React, { useEffect, useRef, useState } from "react"
import GitHubCalendar from "react-github-calendar"

const Graph = () => {
 
  return (
    <div
      className="bg-black w-full flex justify-center items-center py-10 px-[4%]"
    >
      <div className="w-full max-w-full overflow-hidden flex justify-center">
        <GitHubCalendar
          username="swamimalode07"
          blockRadius={4}
          blockSize={15}
          blockMargin={4}
          fontSize={12}
          theme={{
            dark: ["#2a2a2a", "#909090", "#b8b8b8", "#dedede", "#ffffff"],
          }}
          colorScheme="dark"
        />
      </div>
    </div>
  )
}

export default Graph