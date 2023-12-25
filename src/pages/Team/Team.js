import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import saket from '../../assests/team/saket.jpeg'
 import aryan from '../../assests/team/aryan.jpeg'
import prabhat from '../../assests/team/prabhat.jpg'
import sakshi from '../../assests/team/sakshi.jpg'
import dishant from '../../assests/team/dishant.jpg'
import ashwin from '../../assests/team/ashwin.jpg'
import lakshya from '../../assests/team/lakshya.png'
import gaurav from '../../assests/team/gaurav.png'
import TeamCard from './TeamCard'







const Team = () => {
  return (
    <div>
  <Navbar/>
<div className='grid pt-10 mainfont lg:grid-cols-2  mx-10 '>
    <div className='justify-center pt-8 lg:pl-32'>
        <h1 className='text-2xl font-semibold '>Our Team</h1>
        <p className='text-gray-900 pt-5 font-normal'>We have a family thats works together , Our Team members will provide all sort of help with our level best. You can contact us via our instagram handles , linkedin and other social media platforms.
          </p>
    </div>  
    <div className='flex '>
      <img alt='team' src='team.gif' className='imageteam'></img>
    </div>
</div>
<div className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Core Team</h1>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
    </div>
    <div className="flex flex-wrap -m-2 ">
      
    <TeamCard name="Saket Tiwari"  linkLinkedin="https://www.linkedin.com/in/saket-tiwari-603300213" instalink="https://www.instagram.com/being_saket_33/" position="Co-Founder" image={saket}/>
   <TeamCard name="Aryan Tiwari"  linkLinkedin="https://www.linkedin.com/in/aryan-tiwari-b397b8229" instalink="https://www.instagram.com/_shanu_14_/" position="Co-Founder" image={aryan}/>
   <TeamCard name="Ashiwn Yadav" linkLinkedin="https://www.linkedin.com/in/ashwin-yadav-7930b0207" instalink="https://www.instagram.com/ashwinyadav_84/" position="General Secretary" image={ashwin}/>
   <TeamCard name="Dishant Sharma" linkLinkedin="https://www.linkedin.com/in/dishant-sharma-71450b229/" instalink="https://www.instagram.com/dtb_vaardat19/" position="Public Relation Head" image={dishant}/>
   <TeamCard name="Sakshi Gupta" linkLinkedin="https://www.linkedin.com/in/sakshi-gupta-9aa7b01b2"instalink="https://www.instagram.com/sakshigupta__01/" position="Coordinator" image={sakshi}/>
   <TeamCard name="Lakshya Garg" linkLinkedin="https://www.linkedin.com/in/lakshya-garg-1358a6239"instalink="https://www.instagram.com/laks.hyagarg/" position="Coordinator" image={lakshya}/>
  <TeamCard name="Prabhat Sahrawat" linkLinkedin="https://www.linkedin.com/in/prabhatsahrawat" instalink="https://www.instagram.com/prabhat_021/" position="Coordinator" image={prabhat}/>
  <TeamCard name="Gaurav Payal" linkLinkedin="https://www.linkedin.com/in/2oo3-gaurav" instalink="https://www.instagram.com/2oo3_gaurav_payal/" position="Graphics Head" image={gaurav}/>

   </div>
    </div>
  </div>
</div>
  )
}

export default Team