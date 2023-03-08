import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import {AiOutlineClose,AiOutlineMail,AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill}from 'react-icons/bs'
import { useRouter } from 'next/router';

function Navbar() {
    const [nav,setNav]=useState(false)
    const [navBg,setNavBg]=useState(false)
    const [shadow,setShadow]=useState(false)
    const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent');
      setLinkColor('#0ef');
    } else {
      setNavBg('#1f242d');
      setLinkColor('#fff');
    }
  }, [router]);
    const handleNav=()=>{
        setNav(!nav)
    }

useEffect(()=>{
        const handleShadow=()=>{
            if(window.scrollY>=90){
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll',handleShadow)
    },[])
  return (
    <div style={{ backgroundColor: `${navBg}` }} className={shadow?'fixed w-full shadow-xl z-[100]':'fixed w-full z-[100]'}>
        <div className='flex justify-between items-center w-full px-2 2xl:px-16'>
        <Link href='/'>            
             <Image src='/../public/assets/profileImg.png' className='rounded-full' alt='/' width='75' height='30'/>
        </Link>
            <ul style={{ color: `${linkColor}` }}  className='hidden md:flex'>
                <li className='ml-10 text-sm uppercase hover:text-[#0ef]'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:text-[#0ef]'>
                    <Link href='/#about'>About</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:text-[#0ef]'>
                    <Link href='/#skills'>Skills</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:text-[#0ef]'>
                    <Link href='/#projects'>Projects</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:text-[#0ef]'>
                    <Link href='/resume'>Resume</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:text-[#0ef]'>
                    <Link href='/#contact'>Contact</Link>
                </li>
          </ul>
          <div style={{ color: `${linkColor}` }} onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25}/>
          </div>
        </div>

    <div className={nav?' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
        <div className={nav?'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1f242d] p-10 ease-in duration-500'
                           :'fixed left-[100%] top-0 p-10 ease-in duration-500'} >
        <div>
            <div className='flex w-full items-center justify-between'>
            <div>
             <Image src='/../public/assets/profileImg.png' className='rounded-full' alt='/' width='50' height='20'/>
             </div>
             <div onClick={handleNav} className='rounded-full shadow-lg shadow-[#0ef] p-3 cursor-pointer'>
                <AiOutlineClose/>
             </div>
            </div>
            <div className='border-b border-[#0ef] my-4 '>
                <p className='w-[85%] md:w-[90%] text-[#fff] p-3'>Let&#39;s build something legendary together</p>
            </div>
        </div>
        <div className='py-4 flex flex-col'>
            <ul className='uppercase text-[#fff]'>
                <li className='py-4 text-sm hover:text-[#0ef] '>
                  <Link href="/"onClick={handleNav}>Home </Link>
                </li>
                <li className='py-4 text-sm'>
                  <Link href="/#about"onClick={handleNav}>About </Link>
                </li>
                <li className='py-4 text-sm'>
                  <Link href="/#skills"onClick={handleNav}>Skills </Link>
                </li>
                <li className='py-4 text-sm'>
                  <Link href="/#projects"onClick={handleNav}>Projects </Link>
                </li>
                <li className='py-4 text-sm'>
                  <Link href="/#contact"onClick={handleNav}>Contact</Link>
                </li>
            </ul>
            <div className='pt-[80px]'>
                <p className='uppercase tracking-widest text-[#fff]'>Let&#39;s Connect</p>
                <div className='flex items-center justify-between py-4 m-auto sm:w-[60%]'>
                    <div className='rounded-full shadow-lg shadow-[#0ef] p-4 cursor-pointer hover:scale-105  ease-in duration-300'>
                      <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-[#0ef] p-4 cursor-pointer hover:scale-105  ease-in duration-300'>
                      <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-[#0ef] p-4 cursor-pointer hover:scale-105  ease-in duration-300'>
                      <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-[#0ef] p-4 cursor-pointer hover:scale-105  ease-in duration-300'>
                      <BsFillPersonLinesFill/>
                    </div>     
                </div>
            </div>
        </div>
        </div>
    </div>    
    </div>
  )
    
}
export default Navbar