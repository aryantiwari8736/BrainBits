import React from 'react'


const Mainpage = () => {
  return (
    <div className=' bg-gray-900 pb-96 '>
    <div className='bg-gray-900'>
    <div className=' fontour h-screen w-screen '>
    
    <div className='grid '>
    <div className='text-white grid   pt-12 cssmobile '>
    
      < h1 className='  letterspace text-center lg:text-6xl  text-5xl headingfont  headinghgt frontheadcol fontour font-extrabold lg:pl-16 md:pl-16 space-y-4'><span className='border-b-2 frontheadcol textshadow '>Hackathon 1.0</span>  <br></br><span className='red relative top-4 frontheadcol' >BrainBits </span> </h1>
    </div>
    
    
    </div>
    <div className='grid pt-10 mainfont lg:grid-cols-2 mx-10'>
    <div className='justify-center pt-8 lg:pl-32'>
        <h1 className='text-3xl  dark:text-white headingfont text-white  font-semibold '>About us</h1>
        <p className='text-white dark:text-white pt-5 lg:text-xl headingfont  letterspace  font-normal'>Great ideas can come from anyone, anywhere. When tech enthusiasts come together from different regions, with diverse backgrounds and skill levels, amazing things can happen. These brilliant minds will invent something new – something that could change our daily lives, the way we do business or approach humanitarian causes. Because when curious minds collaborate, the world wins.

</p>
{/* <p className='dark:text-white'>Our members active on </p> */}

    </div>
    <div className=''>
      <img alt='realabout' src='backhack.png' className='aboutimg'></img>
    </div>

    </div>

    
  <div className='text-white  headingfont bg-gray-900 pt-6 '>
    <h1 className='text-center headingfont py-6  text-3xl text-white'>Domains</h1>
<div className='grid bg-gray-900 justify-center lg:grid-cols-3'>
    <div className='py-5'>
<img src='webdev.webp' className='h-56 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...' alt=''/>
<div className=''>
    <p className='text-2xl text-center py-4  backgroundcard mx-4' >Web Development</p>

</div>
</div>

<div className='py-5'>
<img src='androiddev.webp' className='h-56  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...' alt=''/>
<div className=''>
    <p className='text-2xl text-center py-4 backgroundcard mx-4'>Android Development</p>

</div>
</div>

<div className='py-5'>
<img src='arvr.webp' className='h-56 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ... relative left-8' alt=''/>
<div className=''>
    <p className='text-2xl text-center py-4 backgroundcard mx-4'>AR/VR</p>

</div>
</div>

<div className='py-5'>
<img src='idea.webp' className='h-56  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 relative left-8   duration-300 ...' alt=''/>
<div className=''>
    <p className='text-2xl text-center py-4 backgroundcard mx-4'>Open Theme</p>

</div>
</div>

</div>
  </div>
    </div>
    
 </div>
    
         </div>

  )
}

export default Mainpage