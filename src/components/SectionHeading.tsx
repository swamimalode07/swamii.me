import React from 'react'
import { Button } from './ui/button'

const SectionHeading = ({ title }:{ title: string }) => {
  return (
    <div className='bg-black flex justify-center text-center py-8'>
           <div className='flex items-start mx-4 border border-white/20 w-5' />
        <div className='text-2xl font-space-grotesk border border-white/20 px-10 py-1 rounded-md bg-grey font-semibold'>
            {title}
        </div>
           <div className='flex-1 mx-4 border border-white/20' />
    </div>
  )
}

export default SectionHeading