import React from 'react'
// import Navbar from '../Navbar'
import InterviewCard from './InterviewCard'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

function Interview() {
  return (
    <div className='dark:bg-black h-full overflow-hidden'>
    <section className=''>
  <Link to="/material" className='relative left-4 mt-6 ml-10'>
  {/* <img src='backbtn.webp' className='h-20 pt-6 pl-4' alt='brainbits'/> */}
  <BiArrowBack size={40} className="dark:text-white" />
  </Link>
</section>
    
    <section className='mt-10 '>
    <h1 className='lg:text-5xl text-3xl  text-center  headingfont mx-6 dark:text-white '><span className='thecolor dark:text-[#8e05c2]'>Preparing you for</span> MAANG!</h1>

            {/* <p className='text-center pt-5 mx-8 lg:text-xl  '>Hey folks, In this section of our community, we are going to post roadmaps for specific domains. The following roadmaps are designed with the help of experts in that domain. </p> */}
        </section>
        <section className="text-gray-600 body-font mainfont ">
  <div className="container py-10 mx-auto cursor-pointer">
    <div className="flex flex-wrap -m-4">
       <InterviewCard link="https://miro.com/app/board/uXjVPDcNjJ8=/?share_link_id=669763743673" interviewimg="amzon.jpg" heading="Amazon Interview Question"/>
       <InterviewCard link="https://miro.com/app/board/uXjVPDcjB_Q=/?share_link_id=916951672460" interviewimg="linkedin.jpg" heading="Linkedin Interview Question"/>
       <InterviewCard link="https://miro.com/app/board/uXjVPCkZp-I=/?share_link_id=704814031077" interviewimg="google.png" heading="Google Interview Question"/>
       <InterviewCard link="https://miro.com/app/board/uXjVPCqshJA=/?share_link_id=332234072123" interviewimg="facebooks.png" heading="Facebook Interview Question"/>
    </div>
  </div>
</section></div>
  )
}

export default Interview
