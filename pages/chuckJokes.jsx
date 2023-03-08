import Image from 'next/image';
import React from 'react';
import chuckJokesImg from '../public/assets/projects/chuckjokes.png'
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
          src={chuckJokesImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'> Chuck Jokes Application</h2>
          <h3>React JS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-[#0ef]'>Project</p>
          <h2 className='text-[#fff]'>Overview</h2>
          <p className='text-[#fff] py-2 text-justify'>
          The React app that fetches jokes from <a href="https://api.chucknorris.io/" className='underline' >https://api.chucknorris.io/</a> is a web application built using the React JavaScript library. This app is designed to retrieve and display Chuck Norris jokes from the specified API.          </p>
          <p className='text-[#fff] py-2 text-justify'>
          When a user loads the app, it sends a request to the API to retrieve a list of joke categories. The user can select a category to retrieve a random joke from that category . Alternatively, the user can click a button to retrieve a random joke from any category or searching by queries </p>
          <p className='text-[#fff] py-2 text-justify'>
          Once the app retrieves a joke from the API, it displays it on the screen using React components.Along with the joke, there are options for liking or disliking it. The user can interact with these buttons to express their preference for the joke.          </p>
          <p className='text-[#fff] py-2 text-justify'>
          Overall, the app is a fun and entertaining way to enjoy Chuck Norris jokes using the power of React and the <a href="https://api.chucknorris.io/" className='underline' >https://api.chucknorris.io/</a> API.
          </p>          
          <a
            href='https://github.com/souid-nasr/chuck-jokes'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 text-[#1f242d]'>Code</button>
          </a>
          <a
            href='https://chuck-jokes-gamma.vercel.app/'
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
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> React
              </p>
              <p className='text-[#fff] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> React-Icons
              </p>
              <p className='text-[#fff] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> Axios
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
