import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Eachmentor from './Eachmentor'
import chetan from '../../assests/team/mentors/chetansagare.jpg'
import palak from '../../assests/team/mentors/palaksharma.jpg'

import microsoft from '../../assests/logo/microsoft.webp'
import gsoc from '../../assests/logo/gsoc.webp'


// import microsoft from 'microsoft.webp'


const Contactus = () => {
  return (
    <div>
      <Navbar/>
      <div className='dark:bg-black dark:text-white overflow-hidden'>
<div className='flex justify-center  mainfont'>

  {/* <img src='commingsoon.gif' className='pt-1'/> */}
</div>
<div className="gird lg:grid-cols-3 m-2">
   <Eachmentor  name="Chetan Sagare"  linkLinkedin="https://www.linkedin.com/in/chetan-sagare/" position="SDE-2 @Microsoft " logo={microsoft} image={chetan} />
   <Eachmentor name="Palak Sharma"  linkLinkedin="https://www.linkedin.com/in/palak-sharma-57256a200/" position="GSOC 22 " image={palak}   logo={gsoc} />
   <Eachmentor name="Soon"  linkLinkedin="" position="SOON" image={microsoft}   logo={microsoft} />
   <Eachmentor name="Soon"  linkLinkedin="" position="SOON" image={microsoft}   logo={microsoft} />
   <Eachmentor name="Soon"  linkLinkedin="" position="SOON" image={microsoft}   logo={microsoft} />
   <Eachmentor name="Soon"  linkLinkedin="" position="SOON" image={microsoft}   logo={microsoft} />
   <Eachmentor name="Soon"  linkLinkedin="" position="SOON" image={microsoft}   logo={microsoft} />
   <Eachmentor name="Soon"  linkLinkedin="" position="SOON" image={microsoft}   logo={microsoft} />
   <Eachmentor name="Soon"  linkLinkedin="" position="SOON" image={microsoft}   logo={microsoft} />
   <Eachmentor name="Soon"  linkLinkedin="" position="SOON" image={microsoft}   logo={microsoft} />
   <Eachmentor name="Soon"  linkLinkedin="" position="SOON" image={microsoft}   logo={microsoft} />



   {/* <Eachmentor name="Aryan Tiwari"  linkLinkedin="https://www.linkedin.com/in/aryan-tiwari-b397b8229" position="Co-Founder" image={aryan}/>
   <Eachmentor name="Vaibhav Bisht" linkLinkedin="https://www.linkedin.com/in/vaibhav-bisht-54519522a" position="General-Secretary" image={vaibhav}/>
   <Eachmentor name="Ashish Bhatt" linkLinkedin="https://www.linkedin.com/in/ashish-bhatt-9b1937225" position="Coordinator" image={ashish}/>
   <Eachmentor name="Prabhat Sahrawat" linkLinkedin="https://www.linkedin.com/in/prabhatsahrawat" position="Coordinator" image={prabhat}/>
   <Eachmentor name="Dev Varshney" linkLinkedin="https://www.linkedin.com/in/varshneydev27" position="Coordinator" image={dev}/>
   <Eachmentor name="Sahib Singh" linkLinkedin="https://www.linkedin.com/in/sahib-singh-b715b2207" position="CP Head" image={sahib}/>
   <Eachmentor name="Gaurav Payal" linkLinkedin="https://www.linkedin.com/in/2oo3-gaurav" position="Graphics Head" image={gaurav}/>
   <Eachmentor name="Prakhal Gupta" linkLinkedin="https://www.linkedin.com/in/prakhal-gupta" position="Backend Developer" image={prakhal}/>
   <Eachmentor name="Lakshya Garg" linkLinkedin="https://www.linkedin.com/in/lakshya-garg-1358a6239" position="Social Media Manager" image={lakshya}/>
   <Eachmentor name="Ashiwn Yadav" linkLinkedin="https://www.linkedin.com/in/ashwin-yadav-7930b0207" position="Frontend Developer" image={ashwin}/>
   <Eachmentor name="Yash Varshney" linkLinkedin="https://www.linkedin.com/in/yash-varshney-7b81ab1b1" position="Web Developer" image={yash}/>
   <Eachmentor name="Riya" linkLinkedin="" position="Developer" image={ria}/>
   <Eachmentor name="Om Daryani" linkLinkedin="https://www.linkedin.com/in/om-daryani-473151239" position="Web Developer" image={om}/>
   <Eachmentor name="Dhruv Rastogi" linkLinkedin="https://www.linkedin.com/in/dhruv-rastogi-62ab70229" position="Flutter Developer" image={dhruv}/> */}
    </div>


{/* <Eachmentor name="Mentor 2" positbion="Soon" image="legend.webp" para="This field will be updated soon"  /> */}
{/* <Eachmentor name="Mentor 1" position="Soon" image="legend.webp" para="This field will be updated soon"  /> */}

</div>
    </div>
  )
}

export default Contactus