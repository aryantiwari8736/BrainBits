import React from 'react'
// import Navbar from '../Navbar'
import InterviewCard from './InterviewCard'
import {Link} from 'react-router-dom'

function Interview() {
  return (
    <>
    <section className=''>
  <Link to="/material">
  <img src='backbtn.webp' className='h-20 pt-6 pl-4' alt='brainbits'/></Link>
</section>
    
    <section className='mt-10 '>
    <h1 className='lg:text-5xl text-3xl  text-center  font-extrabold mx-6  '><span className='thecolor'>Preparing you for</span> MAANG!</h1>

            {/* <p className='text-center pt-5 mx-8 lg:text-xl  '>Hey folks, In this section of our community, we are going to post roadmaps for specific domains. The following roadmaps are designed with the help of experts in that domain. </p> */}
        </section>
        <section className="text-gray-600 body-font mainfont ">
  <div className="container px-5 py-10 mx-auto cursor-pointer">
    <div className="flex flex-wrap -m-4">
       <InterviewCard link="https://miro.com/app/board/uXjVPDcNjJ8=/?share_link_id=669763743673" interviewimg="amzon.jpg" heading="Amazon Interview Question"/>
       <InterviewCard link="https://miro.com/app/board/uXjVPDcjB_Q=/?share_link_id=916951672460" interviewimg="linkedin.jpg" heading="Linkedin Interview Question"/>
       <InterviewCard link="https://miro.com/app/board/uXjVPCkZp-I=/?share_link_id=704814031077" interviewimg="google.png" heading="Google Interview Question"/>
    </div>
  </div>
</section></>
  )
}

export default Interview
