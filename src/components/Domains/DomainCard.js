import React from 'react'

function DomainCard(props) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 ">
    <div className="border border-violet-800  backgroundcard  p-14 rounded-lg   ">
        <img alt='domain' src='expected.webp' className='h-9'/>
    
      <h2 className=" frontheadcol text-2xl   font-bold title-font mb-2 mt-2 antialiased ...  lg:hover:text-gray-700 cursor-pointer  text-gray-700">{props.domain}</h2>
      <p className="leading-relaxed text-base font-medium  cursor-pointer">{props.data}</p>
    </div>
  </div>
  )
}

export default DomainCard
