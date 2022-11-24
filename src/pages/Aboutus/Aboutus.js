import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const Aboutus = () => {
  return (
    <div>
      <Navbar/>
        
<div className='grid pt-10 mainfont text-xl  lg:grid-cols-2 mx-10'>
    <div className='justify-center pt-8 lg:pl-32'>
      <div className='flex'>
        
        <h1 className='text-2xl font-semibold text-black'>About us</h1>
        <img src='aboutussmall.webp' className= 'h-16 relative bottom-6 left-2' alt=''/>
        </div>
        <p className='pt-5 text-black font-bold'>We are a group of enthusiastic people who work together for all around growth of an individual. We conduct workshops related to different tech domains and all encourage an individual to learn the things in the proper manner with expert understanding. We are the fastest growing community in Delhi NCR and mentors support from professional placed in elite companies.
</p>
<ul className='text-black font-semibold'>
<li className=' text-xl ' >Full technical support for free to innovative ideas</li>
<li   className=' text-xl'> Get a chance to intreact with out mentors one to one.</li>
<li   className=' text-xl'> Be a part of our community .</li>
<li   className=' text-xl'>Get an oppurtunity to win Hackathons every month.</li>
{/* <li   className='headingfont text-xl'>Get an oppurtunity to win Hackathons every month.</li>  */}





</ul>
<p className=''>Our members active on </p>
<div className='flex gap-4 pt-4'>
<img alt='git' src='github.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img alt='gfg' src='gfg.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img alt='codeshef' src='codeshef.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img alt='codeforces' src='codeforces.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>

    <img alt='leetcode' src='leetcode.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
</div>
    </div>
    <div className=''>
      <img alt='realabout' src='realabout.gif' className='aboutimg'></img>
    </div>




</div>
    </div>
  )
}

export default Aboutus