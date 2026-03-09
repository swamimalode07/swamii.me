import React from 'react'
import ProjectsRow from './ProjectsRow'
import { projects } from '@/helpers/constants'
import ButttonRow from './SectionHeading'
import ProjectCard from './ProjectCard.tsx/ProjectCard'
import ProjectsCard from './ProjectsCard'
import { Button } from './ui/button'
import RingButton from './RingButton'
import Link from 'next/link'

const ProjectsSection = () => {
  return (
    <div>
      <div className='px-[4%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.slice(0,3).map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.name}
            description={project.description}
            liveLink={project.link}
            githubLink={project.github}
            status={project.status}
          />
        ))}
      </div>
      <div className="px-[4%] flex justify-center pb-6">
        <Link href="/projectspage">
          <RingButton text="View All Projects" size="lg"/>
        </Link>
      </div>
    </div>
  )
}

export default ProjectsSection