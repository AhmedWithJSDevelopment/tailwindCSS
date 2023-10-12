import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-cyan-100 py-24 shadow-lg' id='home'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider  Background-Image-Title  hover:Background-Image-Paragraph'>I&apos;m Ahmed</h1>
          <p className='mt-4 text-3xl  capitalize tracking-wide Background-Image-Paragraph-two  hover:Background-Image-Paragraph'>
            Front-End Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide hover:Background-Image-Paragraph'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/AhmedWithJSDevelopment'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/ahmed-mohammed-8676a9229/'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-blue-700 duration-300' />
            </a>
            <a href='https://twitter.com/AhmedMo38226329'>
              <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-sky-400 duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
export default Hero;
