import Image from 'next/image';
import React from 'react';
import employeeManagementImg from '../public/assets/projects/employeeManagement.png';
import { RiRadioButtonFill } from 'react-icons/ri';

import Link from 'next/link';

const employeemanagement = () => {
  return (
    <div>

    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-[#1f242d]/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={employeeManagementImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Admin Dashboard For Employees Management</h2>
          <h3>MongoDB/ ExpressJS/ React JS/ Node JS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-[#0ef]'>Project</p>
          <h2 className='text-[#fff]'>Overview</h2>
          <p className='text-[#fff] py-2 text-justify'>
          An admin dashboard for employees management using MongoDB/ ExpressJS/ React JS/ Node JS is a powerful tool that helps organizations efficiently manage their employee data. It provides a user-friendly interface to perform various administrative tasks related to employee management.          </p>
          <p className='text-[#fff] py-2 text-justify'>
          The dashboard features a user management module that enables admins to add, edit, and delete employee records. It also provides an employee directory that lists all employees with their basic information and including contact details.          </p>
          <p className='text-[#fff] py-2 text-justify'>
          The Admin Dashboard for Employee Management Projects and Tasks is a comprehensive tool designed to help businesses manage their employees&#39;tasks and projects effectively.</p>
          <p className='text-[#fff] py-2 text-justify'>
          Overall, the Admin Dashboard for Employee Management Projects and Tasks is an essential tool for any business looking to improve employee productivity and project management. With its powerful features and easy-to-use interface, this application helps businesses maximize their resources, achieve their goals, and drive growth.</p>
          <a
            href='https://github.com/souid-nasr/employees-managemant'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 text-[#1f242d]'>Code</button>
          </a>
          <a
            href=''
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
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> Vite JS
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

export default employeemanagement;
