import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#0ef]'>
            About
          </p>
          <h2 className='py-4 text-[#fff]'>Who I Am</h2>
          <p className='py-2 text-ml text-justify text-[#fff]'>
          </p>I&#39;am a full stack web developer, passionate about the ICT world and its growing evolution.
           So, I want to learn continuously. I can adapt onto any technology rapidly making myself flexible upon any tech stack.
            I aim to put my skills at the service of a company with an innovative, enthusiastic and audacious culture.

          <p className='py-2 text-justify text-[#fff]'>
          I worked on several projects that involved React JS and Node JS. I was responsible for creating, testing and debugging code, and I also collaborated with my team to implement new features and improve existing functionality.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-[#fff] underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-[#0ef] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
