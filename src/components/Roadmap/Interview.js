import React from 'react'
import Navbar from '../Navbar'
import InterviewCard from './InterviewCard'

function Interview() {
  return (
    <>
    <Navbar/>
    <section className='mt-10'>
            <div className='lg:text-5xl text-2xl  text-center mainfont font-extrabold text-zinc-900'>Everything From Basics to Advance</div>
            <p className='text-center pt-5 mx-8 lg:text-xl'>Hey folks, In this section of our community, we are going to post roadmaps for specific domains. The following roadmaps are designed with the help of experts in that domain. </p>
        </section>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto cursor-pointer">
    <div className="flex flex-wrap -m-4">
       <InterviewCard link="https://miro.com/app/board/uXjVPDcNjJ8=/?share_link_id=669763743673" interviewimg="amzon.jpg" heading="Amazon Interview Question"/>
       <InterviewCard link="https://miro.com/app/board/uXjVPDcjB_Q=/?share_link_id=916951672460" interviewimg="linkedin.png" heading="Linkedin Interview Question"/>
    </div>
  </div>
</section></>
  )
}

export default Interview
