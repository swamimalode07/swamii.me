"use client"

import React, { useState } from 'react'
import SkillPill from '@/components/SkillPill'

const page = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center justify-center flex-col gap-4'>
      <SkillPill
        key="air"
        skillName="Supabase"
        icon={
          <svg height="20" width="20" viewBox="0 0 109 113" fill="none"><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase__paint0_linear)" /><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase__paint1_linear)" fillOpacity="0.2" /><path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" /><defs><linearGradient id="supabase__paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse"><stop stopColor="#249361" /><stop offset="1" stopColor="#3ECF8E" /></linearGradient><linearGradient id="supabase__paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse"><stop /><stop offset="1" stopOpacity="0" /></linearGradient></defs></svg>
        }
        visible={visible}
      />
      <div className='absolute top-[65%]'>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={visible}
            onChange={(e) => setVisible(e.target.checked)}
            className="sr-only"
          />

          <div className={`
            h-4 w-4 rounded-md border flex items-center justify-center transition-all duration-150
            ${visible
              ? "bg-emerald-500 border-emerald-500"
              : "bg-neutral-700 border-neutral-500"}
          `}>
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 fill-none stroke-white stroke-[3] transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <span className=" text-xs text-neutral-300 hover:text-white transition-colors duration-150">Toggle animation</span>
        </label>
      </div>
    </div>
  )
}

export default page