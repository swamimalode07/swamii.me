import React from 'react'
import SponsorCard from './SponsorCard'
import TakethisSlot from './TakethisSlot'

const SponsorSection = () => {
  return (
     <div className="px-[4%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
        <SponsorCard/>
        <TakethisSlot/>
    </div>
  )
}

export default SponsorSection