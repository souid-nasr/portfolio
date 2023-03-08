import React from 'react'
import ProjectItem from './ProjectItem'
import employeeManagementImg from '../public/assets/projects/employeeManagement.png';
import nasrAcademyImg from '../public/assets/projects/nasrAcademy.png'
import newsImg from '../public/assets/projects/newsai.png'
import chuckJokesImg from '../public/assets/projects/chuckjokes.png'

function Projects() {
  return (
    <div id='projects' className='w-full'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <p className='text-xl tracking-widest uppercase text-[#0ef]'>
        Projects
      </p>
      <h2 className='py-4 text-[#fff]'>What I&apos;ve Built</h2>
      <div className='grid md:grid-cols-2 gap-8'>
      <ProjectItem
            title='AI React News App'
            backgroundImg={newsImg}
            projectUrl='/ainews'
            tech='React JS'
          />
          <ProjectItem
            title='Employee Management'
            backgroundImg={employeeManagementImg}
            projectUrl='/employeeManagement'
            tech='MERN Stack'

          />
          <ProjectItem
            title='Nasr Academy App'
            backgroundImg={nasrAcademyImg}
            projectUrl='/nasrAcademy'
            tech='MERN Stack'

          />
          <ProjectItem
            title='Chuck Jokes App'
            backgroundImg={chuckJokesImg}
            projectUrl='/chuckJokes'
            tech='React JS'
          />
      </div>
    </div>
    </div>    
  )
}

export default Projects