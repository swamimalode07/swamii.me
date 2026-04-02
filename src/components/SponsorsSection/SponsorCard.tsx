import Image from 'next/image'
import React from 'react'
import RingButton from '../RingButton'
import { GitHubIcon } from '@/app/icons/Githubicon'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'

const SponsorCard = () => {
  return (
    <div className='bg-grey p-4 rounded flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center w-fit'>
        <Image
          src="/sponsors/neetcode.png"  
          alt="Sponsor Logo"
          width={100}
          height={100}
          className='object-contain rounded-t'
        />
        <p className='w-full text-center text-lg text-green-500 font-semibold border border-neutral-600 rounded-b-lg'>
          $250
        </p>
      </div>
      <div className='text-centers'>
        <p className='text-xl pt-2 font-semibold text-center'>Navdeep Singh</p>
        <div className='flex items-center justify-center'>
            <Button variant="link" size="sm" className='flex text-white text-md items-center gap-1 bg-transparent hover:bg-transparent'>
                Neetcode.io <ArrowUpRight />
            </Button>
        </div>
      </div>
      <div className='flex gap-4 mt-4 w-full justify-center'>
        <RingButton href='https://github.com/neetcode-gh' target='_blank' rel='noopener noreferrer' icon={GitHubIcon} text="neetcode-gh" size="md" className='w-1/2'/>
        <RingButton
        href='https://x.com/neetcode1'
        target='_blank'
        rel='noopener noreferrer'
         icon={
            <svg height="15" width="15" fill="none" viewBox="0 0 1200 1227" className="text-white hover:text-[#5865F2] transition-colors duration-300">
                <path
                    fill="#fff"
                    d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                />
            </svg>
        } text="neetcode1" size="md" className='w-1/2'/>
      </div>
    </div>
  )
}

export default SponsorCard