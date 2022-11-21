import React from 'react'
import { Link } from 'react-router-dom'
import MaterialCard from './MaterialCard'

function Materials() {
  return (
    <>
        <section className=''>
        <Link to="../">
        <img src='backbtn.webp' className='h-20 pt-6 pl-4' alt='brainbits'/></Link>
        </section>
        <section className='mt-10 '>
            <h1 className='lg:text-5xl text-3xl  text-center  font-extrabold mx-6 headingfont  '><span className='thecolor'>The Best Resources</span>  across the Web !</h1>
            {/* <p className='text-center pt-5  lg:text-xl mx-8 lg:mx-24'>Hey folks, In this section of our community, we are going to post roadmaps for specific domains. The following roadmaps are designed with the help of experts in that domain. </p> */}
        </section>
        <section className="text-gray-600 body-font mainfont ">
    <div className="container px-5 py-10  mx-auto cursor-pointer">
    <div className="flex flex-wrap -m-4 ">
   <Link to="/roadmap"> <MaterialCard roadmapimg = "roadmap.png" category="Roadmap" heading="Roadmaps For Everything"/></Link> 
   <Link to="/interview"> <MaterialCard roadmapimg = "interview.png" category="Roadmap" heading="Interview Questions"/></Link> 
   {/* <Link to="/programming"> <MaterialCard roadmapimg = "interview.png" category="Roadmap" heading="Programming Questions"/></Link>  */}
       
      </div>
  </div>
</section>
        </>
  )
}

export default Materials