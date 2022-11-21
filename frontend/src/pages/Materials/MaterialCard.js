import React from 'react'

function MaterialCard(props) {
  return (
    <div className="p-4 mainfont  ">
    
    <div className="h-full m-8 lg:m-4  border-opacity-60 rounded-lg overflow-hidden backgroundcard ">
    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={props.roadmapimg} alt="blog"/>
    <div className="p-6  ">
      <h2 className="tracking-widest text-xs title-font font-extrabold text-gray-400 mb-1">{props.category}</h2>
      <h1 className="title-font text-lg font-bold brightness-110 text-red-500 mb-3">{props.heading}</h1>
      <img src='faang.webp' className='w-16'  alt='faang' />
      <p className="leading-relaxed mb-3">{props.data}</p>
    </div>
  </div>

</div>
  )
}

export default MaterialCard
