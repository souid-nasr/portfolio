import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Resume = () => {
  return (
    <div id='resume'>
      <Head>
        <title>Nasr | Resume</title>
        <meta
          name='description'
          content='I’m a full Stack web developer capable of developing end-to-end web applications.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='my-4 p-4 w-full flex justify-between items-center'>
        <h2 className='text-center text-[#fff]'>Nasr Souid</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/nasr-souid'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem', color: "#fff" }} />
            </a>
            <a
              href='https://github.com/souid-nasr'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem', color: "#fff" }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider text-[#fff]'>
          <div className='hidden sm:block'>
            <p>
              seriosity <span className='px-1'>|</span> Creativity{' '}
              <span className='px-1'>|</span> Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>seriosity</p>
            <p className='py-2'>Creativity</p>
            <p>Problem Solving</p>
          </div>
        </div>
        <p className='text-[#fff] text-justify'>
          I am a full stack web developer, passionate about the ICT world and its growing evolution.
          So, I want to learn continuously. I can adapt onto any technology rapidly making myself flexible upon any tech stack. Diverse analytical skills, team collaboration, and
          relationship building.
          I aim to put my skills at the service of a company with an innovative, enthusiastic and audacious culture.

        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2 text-[#fff]'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full Stack Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6 text-[#fff]'>
          <p className='italic'>
            <span className='font-bold italic'>
            AGEOS Tunisia
            </span>
            <span className='px-2'>|</span>Tunis, Tunisia
          </p>
          <p className='py-1 italic'>Full Stack Web Dveloper and Web Master (October 2022 - Current)</p>
          <p className='pt-3'>A Dynamic website for an event conference includes the following key components</p>

          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Homepage: This is the first page that visitors will see and it should provide an overview of the conference, including the date, venue, key information and goals about the event.
            </li>
            <li>
              Program: The conference agenda should be prominently displayed on the website and should include information
              on keynote speakers, sessions, workshops, and other activities.
            </li>
            <li>
              Speakers: The website should have a section dedicated to the conference speakers, including their biographies, headshots, and any relevant information about their presentations.
            </li>
            <li>
              Sponsors: Information about the conference sponsors should be included on the website, along with any logos or branding
            </li>
            <li>
            Registration: A prominent call-to-action to register for the conference should be included on the website, along with information about the registration process and fees.
            </li>
            <li>
            Contact: The website should include a way for visitors to contact the conference organizers with any questions or concerns.
            </li>
            <li>
            Venue: Information about the venue should be included on the website, including directions, hotels information, and local amenities.
            </li>
            <li>
             Blog: This section provides updates and news related to the conference, and may include articles, photos, and videos
            </li>
            <li>
             Social media: The conference should have links to its social media accounts: Instagram, LinedIn and Facebook, to keep attendees informed and engaged.
            </li>
           </ul>
           <p className='py-2 text-[#fff]'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>Express JS
            <span className='px-2'>|</span>JWT
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span> RESTAPI
          </p>
        </div>

        <div className='py-6 text-[#fff]'>
          <p className='italic'>
            <span className='font-bold italic'>
            FENIX FUTURE DEV
            </span>
            <span className='px-2'>|</span>Remote, Medenine
          </p>
          <p className='py-1 italic'>Front-end Dveloper Intern (August 2022 – September 2022 )</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Work with a team of 4 persons to redevelop and create an updated version of the medical platform
(www.3eyaada.tn) that connects doctors and patients
            </li>
          </ul>
          <p className='py-2 text-[#fff]'>
            <span className='font-bold'>Technical Skills: </span>
             HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Material UI
          </p>
        </div>
        <div className='py-6 text-[#fff]'>
          <p className='italic'>
            <span className='font-bold italic'>
            Piland
            </span>
            <span className='px-2'>|</span>Ariana, Tunisia
          </p>
          <p className='py-1 italic'>Full Stack Web Dveloper (Mars 2022 - June 2022)</p>
          <p className='pt-3'>An integrated university enrolment management platform is a comprehensive system that provides end-to-end services to students, institutions, universities and relevant administrative bodies involved in the enrolment process. It consists of three main components, namely Front Office, Back Office and Dashboard.</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li className='text-justify'>
            The Front Office component of the platform is primarily focused on the students&#39; experience. It provides them with a user-friendly interface where they can access information regarding the courses available, their requirements, deadlines, and other necessary information. Additionally, students can submit their applications, track their enrolment process, and receive real-time updates on the status of their applications.            </li>
            <li className='text-justify'>
            The Dashboard component of the platform provides a central interface where administrators can monitor, track and analyse the enrolment process. They can access reports, analyse data and make decisions based on real-time insights. Moreover, the dashboard provides features such as automated messaging, scheduling, and other essential tools for efficient communication with students.
            </li>
            <li className='text-justify'>
            The Back Office component of the platform is focused on the administrative aspects of enrolment management. It provides institutional and university staff with a system for processing applications, managing student data, and verifying their qualifications. Additionally, the system automates the workflow process to reduce manual interventions and increase efficiency.
</li>
           </ul>
           <p className='py-2 text-[#fff]'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>Express JS
            <span className='px-2'>|</span>JWT
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span> RESTAPI
          </p>
        </div>
      </div>
    </div>
  )
}
export default Resume