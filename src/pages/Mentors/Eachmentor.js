import React from 'react'

function Eachmentor(props) {
  return (
    <div>
       <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">

<div className="h-full flex items-center backgroundcard dark:bg-[#1d1d1d] p-4 rounded-lg">
  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={props.image}/>
  <div className="flex-grow">
  <h2 className="text-gray-900 dark:text-white title-font font-bold mainfont">{props.name}</h2>
    <p className=" font-bold">{props.position}</p> <a href={props.linkLinkedin} target="_blanck"><i class="fa-brands fa-linkedin fa-2x tele"></i></a><i class="fa-brands fa-instagram fa-2x insta">  </i>
    <img src={props.logo} className="h-4" alt='microsoft' />
  </div>
</div>
</div>


    </div>

  )
}

export default Eachmentor
