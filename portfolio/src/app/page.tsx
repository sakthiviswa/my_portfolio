import React from 'react';
import Navbar from '@/app/componets/Navbar';
import Main from '@/app/componets/main';
import About from '@/app/componets/about';
import Resume from '@/app/componets/resume';
import Skills from '@/app/componets/skills';
import Myproject from './componets/Myprojects';
import Contact from '@/app/componets/contact';



export default function Home() {
  return (
    <main className=" bg-gradient-to-r from-[#0d0d0d] via-[#2c003e] to-[#120022]  ">
      <Navbar />
      <Main />
      <About />
      <Resume/>
      <Skills/>
    <Myproject/>
    <Contact/>


    </main>
  );
}
