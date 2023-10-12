import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title:    (
      <div className=' Background-Image-Title-HTML '>
       HTML&CSS
      </div>
    ),
    icon: <FaHtml5 className='h-16 w-16 text-orange-600' />,
    text:  (
      <div className=''>
        Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.
      </div>
    ),
  },
  {
    id: nanoid(),
    title: 
      (
      <div className=' Background-Image-Title-JS '>
       Javascript
      </div>
    ),
    
    
    icon: <FaJs className='h-16 w-16 text-yellow-400' />,
    text: (
      <div className='hover:Background-Image-Paragraph'>
        Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.
      </div>
    ),
  },
  {
    id: nanoid(),
    title:  (
      <div className=' Background-Image-Title-React '>
       React
      </div>
    ),
    icon: <FaReact className='h-16 w-16 text-sky-500' />,
    text: (
      <div className=''>
        Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.
      </div>
    ),
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://to-do-now-react-project.netlify.app/',
    github: 'https://github.com/AhmedWithJSDevelopment',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://unsplash-image2.netlify.app/',
    github: 'https://github.com/AhmedWithJSDevelopment',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://temp-contentful-app.netlify.app/',
    github: 'https://github.com/AhmedWithJSDevelopment',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
