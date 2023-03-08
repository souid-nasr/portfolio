import Image from 'next/image';
import React from 'react';
import nasrAcademyImg from '../public/assets/projects/nasrAcademy.png'
import { RiRadioButtonFill } from 'react-icons/ri';

import Link from 'next/link';

const nasrAcademy = () => {
  return (
    <div>

    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-[#1f242d]/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={nasrAcademyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'> Nasr Academy Application</h2>
          <h3>MongoDB/ ExpressJS/ React JS/ Node JS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-[#0ef]'>Project</p>
          <h2 className='text-[#fff]'>Overview</h2>
          <p className='text-[#fff] py-2 text-justify'>
          The education platform is an online learning management system that aims to provide a collaborative and engaging learning environment for students, teachers, and the general public. It provides a comprehensive set of tools and features that enable students to access and interact with educational resources, complete assignments, and communicate with their teachers and peers.          </p>
          <p className='text-[#fff] py-2 text-justify'>
          The platform is designed to accommodate three roles: public, teacher, and student. The public role have limeted access to features of the platform.</p>
          <p className='text-[#fff] py-2 text-justify'>
          As a teacher, you have the ability to create and manage courses with video lectures and assessments and recieve messages of students.</p>
          <p className='text-[#fff] py-2 text-justify'>
          The student role, on the other hand, enables learners to access course materials, complete assignments. Students can view the course content, submit assignments and take quizzes. They can also communicate with their teachers via the platform&#39;s messaging.</p>
          <a
            href='https://github.com/souid-nasr/nasr-academy'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 text-[#1f242d]'>Code</button>
          </a>
          <a
            href='https://nasr-academy-nasr-souid.vercel.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 text-[#1f242d]'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-[#0ef] rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-[#fff] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> Mongo
              </p>
              <p className='text-[#fff] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> Express
              </p>
              <p className='text-[#fff] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> React
              </p>
              <p className='text-[#fff] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> Node
              </p>
              <p className='text-[#fff] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> Material UI
              </p>
              <p className='text-[#fff] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> React Bootsrap
              </p>
              <p className='text-[#fff] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> SCSS
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer text-[fff]'>Back To Projects</p>
        </Link>
      </div>
 
    </div>
    </div>
  );
};

export default nasrAcademy;
