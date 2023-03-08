import Image from 'next/image';
import React from 'react';
import newsImg from '../public/assets/projects/newsai.png';
import { RiRadioButtonFill } from 'react-icons/ri';

import Link from 'next/link';

const newsai = () => {
  return (
    <div>

    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-[#1f242d]/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={newsImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Artificial Intelligence React News Application</h2>
          <h3>React JS / Alan AI/ Vite JS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-[#0ef]'>Project</p>
          <h2 className='text-[#fff]'>Overview</h2>
          <p className='text-[#fff] py-2 text-justify'>
          An Artificial Intelligence React News fetching application using Alan AI is a smart and efficient tool that automates the process of collecting and analyzing news articles from the popular news website <a href="https://newsapi.org/" className='underline' >https://newsapi.org/</a>. The application is built using React framework, which is a powerful and flexible tool for building user interfaces.
          </p>
          <p className='text-[#fff] py-2 text-justify'>
          The application uses Alan AI, an advanced voice assistant platform, to enable users to interact with the news-fetching application using voice commands. With Alan AI, users can simply speak their queries to the application, and it will respond with the latest news articles relevant to their queries.
          </p>
          <p className='text-[#fff] py-2 text-justify'>
          The application can search for news articles by keywords, categories, sources, and dates, allowing users to narrow down their search results and find the news they are looking for quickly.
          </p>
          <p className='text-[#fff] py-2 text-justify'>
          In summary, the Artificial Intelligence React News fetching application using Alan AI is a cutting-edge tool that streamlines the process of collecting and analyzing news articles. With its advanced voice assistant technology and powerful machine learning algorithms, the application is a must-have tool for anyone who wants to stay up-to-date with the latest news and current events. </p>
          <a
            href='https://github.com/souid-nasr/news-app'
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
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> React
              </p>
              <p className='text-[#fff] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> Alan AI
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
                <RiRadioButtonFill className='pr-1 text-[#0ef]' /> News API
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

export default newsai;
