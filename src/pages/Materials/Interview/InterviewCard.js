import React from 'react'

function InterviewCard(props) {
  return (
    <div className="p-4 ">
    <a target="_blanck" href={props.link}>
  <div className="h-full mx-6  backgroundcard dark:border-0 dark:bg-[#1d1d1d] hover:scale-[1.05] transition-all border-2  border-opacity-60 rounded-lg overflow-hidden">
    <img className="lg:h-48  w-full object-cover object-center" src={props.interviewimg} alt="blog"/>
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{props.category}</h2>
      <h1 className="title-font text-lg font-medium text-red-500 mb-3">{props.heading}</h1>
      <img src='faang.webp' className='w-12' alt='brainbits' />
      <p className="leading-relaxed mb-3">{props.data}</p>
    </div>
  </div>
  </a>
</div>
  )
}

export default InterviewCard
