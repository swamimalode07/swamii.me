import React from 'react'
import Experience from './ExperianceComponent'

const ExperienceSection = () => {
    return (
        <div className='flex flex-col my-8 md:my-10  '>
            <Experience
                logo="/conduitLogo.png"
                company="Conduit Commerce"
                role="Intern"
                duration="Aug 2025 - Present"
                points={[
                    "Contributing to the development of enterprise-grade frontend systems powering modern wholesale e-commerce.",
                    "Collaborating with the engineering team to build scalable, responsive UI components and optimize performance across the platform."
                ]}
                rounded='top'
                skills={['Next.js', 'TypeScript', 'Tailwind CSS',"Redux","Python","FastAPI","Docker"]}
            />
            <Experience
                logo="/mach5.png"
                company="Mach5 Software"
                role="Freelance Developer"
                duration="Mar 2025 - May 2025"
                points={[
                    "Worked as a Frontend Developer, transforming Figma design into fully responsive, high-performance website",
                    "Implemented core SEO features: lazy loading, WebP images, clean URLs, meta tags, Open Graph, and accessibility.",
                    "Set up essential SEO infrastructure that includes robots.txt, dynamic sitemap.xml, and crawlable internal links."
                ]}
                rounded='bottom'
                skills={["HTML","Tailwind CSS","SEO"]}
            />
        </div>
    )
}

export default ExperienceSection