import React from 'react'
import ProjectsRow from './ProjectsRow'
import { projects } from '@/helpers/constants'
import ButttonRow from './SectionHeading'

const ProjectsSection = () => {
  return (
    <div>
      {projects.slice(0,4).map((project) => (
          <ProjectsRow key={project.id} title={project.name} link={project.link} description={project.description} />
      ))}
    </div>
  )
}

export default ProjectsSection