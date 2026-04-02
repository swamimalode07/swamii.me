import React from 'react'

const TakethisSlot = () => {
  return (
    <div className='col-span-1 h-full '>
        <a
      href='https://github.com/sponsors/swamimalode07'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Open GitHub Sponsors for swamimalode07'
      className='h-full block col-span-1'
    >
      <div className='h-full bg-grey p-4 rounded flex flex-col items-center justify-center border-2 border-dashed border-neutral-600 hover:border-white transition-all duration-300 '>
        <div className='flex flex-col items-center justify-center gap-3 text-center'>
          <p className='text-xl font-semibold'>
            Take this slot
          </p>

          <p className='text-sm text-neutral-400 max-w-[180px]'>
            Become a sponsor and get your logo here
          </p>

          <iframe src="https://github.com/sponsors/swamimalode07/button" title="Sponsor swamimalode07" height="32" width="114" className='border border-neutral-600 rounded pointer-events-none'></iframe>
        </div>
      </div>
    </a>
    </div>
  )
}

export default TakethisSlot