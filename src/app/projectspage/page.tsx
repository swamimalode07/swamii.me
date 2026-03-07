import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard.tsx/ProjectCard'
import RingButton from '@/components/RingButton'
import { Button } from '@/components/ui/button'
import { projects } from '@/helpers/constants'
import { Redo2, Undo2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='bg-black'>
            <Container>
                <div className="w-full md:px-8">
                    <div className="text-white px-[2%]">
                        <div className='text-lg gap-2 items-center font-semibold mt-8 mb-4 '>
                            <Link href="/" className='flex items-center gap-2'>
                                <Button variant='primary' size="lg"><Undo2 /> Back </Button>
                            </Link>
                        </div>
                        <div className='flex flex-col gap-4 mb-8'>
                            <div className='text-6xl pt-10 font-semibold font-space-grotesk'>
                                Projects
                            </div>
                            <div className='text-xl text-neutral-500'>
                                All my Proof of work at one place
                            </div>
                        </div>
                        <hr className= 'border-0.5 border-[#424244]' />
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    image={project.image}
                                    title={project.name}
                                    description={project.description}
                                    liveLink={project.link}
                                    githubLink={project.github}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default page