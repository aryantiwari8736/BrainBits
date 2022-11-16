import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import MaterialCard from './MaterialCard'



function Materials() {
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
   <Link to="/roadmap"> <MaterialCard roadmapimg = "roadmap.jpg" category="Roadmap" heading="Roadmaps For Everything"/></Link> 
   <Link to="/interview"> <MaterialCard roadmapimg = "interview.webp" category="Roadmap" heading="Interview Questions"/></Link> 
       
      </div>
  </div>
</section>
        </>
  )
}

export default Materials
