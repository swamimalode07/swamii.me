import React from 'react'
import SponsorCard from './SponsorCard'

const SponsorSection = () => {
  return (
     <div className="px-[4%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SponsorCard/>
    </div>
  )
}

export default SponsorSection