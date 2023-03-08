import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import Link from 'next/link';

import {BsFillPersonLinesFill}from 'react-icons/bs'
function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-[#fff]'>
                    Let&#39;s build something together
                </p>
                <h1 className='py-4 text-[#fff]'>
                    Hi, I&#39;am <span className='text-[#0ef]'>Nasr Souid</span>  
                </h1>
                <h1 className='py-2 text-[#fff]'>
                    A Full-Stack Web Developer
                </h1>
                <p className='py-4 text-[#fff] sm:max-w-[70%] m-auto'>
                    With expertise in both front-end and back-end technologies, capable of developing end-to-end web applications.               
                </p>
                <div className='flex items-center justify-between py-4 m-auto max-w-[330px]'>
                <a
                    href='https://www.linkedin.com/in/nasr-souid'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-[#0ef] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn/>
                    </div>
                  </a>
                  <a
                    href='https://github.com/souid-nasr'
                    target='_blank'
                    rel='noreferrer'
                  > 
                    <div className='rounded-full shadow-lg shadow-[#0ef] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub/>
                    </div>
                  </a>
                  <Link href='/#contact'>
                    <div className='rounded-full shadow-lg shadow-[#0ef] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail/>
                    </div>
                  </Link>
                  <Link href='/resume'>
                    <div className='rounded-full shadow-lg shadow-[#0ef] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill/>
                    </div>
                  </Link>     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main