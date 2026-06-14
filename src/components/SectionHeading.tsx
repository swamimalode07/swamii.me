import React from 'react'

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className='bg-[#09090B] pt-12 sm:pt-16'>
      <h2 className='px-[5%] font-space-grotesk text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl'>
        {title}
      </h2>
      <div className='border border-b border-[#1C1C1F] -mt-2' />
    </div>
  )
}

export default SectionHeading
