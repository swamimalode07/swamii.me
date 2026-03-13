import { CircleArrowOutUpRight } from 'lucide-react'
import React from 'react'

const ProjectsRow = ({ title, link, description }: { title: string; link: string; description: string }) => {
  return (
    <div className='px-[3%] py-3 font-space-grotesk'>
      <div className='bg-grey px-6 py-4 rounded-2xl group overflow-hidden'>
        
        {/* Main Row */}
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold'>{title}</h2>
          <div className='flex-1 mx-4 border-t border-white/20' />
          <a href={link} target="_blank" rel="noopener noreferrer">
            <CircleArrowOutUpRight className="h-5 w-5 text-white group-hover:rotate-45 transition-transform duration-150" />
          </a>
        </div>

        {/* Description - slides down on hover */}
        <div className='grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300'>
          <div className='overflow-hidden'>
            <p className="text-sm text-gray-400 mt-3">{description}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectsRow