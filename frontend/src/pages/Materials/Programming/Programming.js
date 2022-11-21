import React from 'react'
import { Link } from 'react-router-dom'
import ProgrammingCard from './ProgrammingCard'
import {topicList} from './data'
import Navbar from '../../../components/Navbar/Navbar'
import './Programming.css'
import Progcatat from './Progcatat'
function Programming() {
  return (
   <>
         <Navbar/>
         <div className='progback mainfont'>
         <Link to="/material"><img src='backbtn.webp' className='h-20 pt-6 pl-4' alt='brainbits'/></Link>
            <div className='text-sm text-slate-600' >Let's Crack the interview</div>
            <div className='font-extrabold'> Practice Your Concepts </div>
          
         </div>
<div className='mainTop'>
          <Progcatat/>
         <div className='progCont mainfont'>
        {topicList.map( (item)=> (<ProgrammingCard langheading={item.langheading}/>))}
         </div>
         </div>
         
         </>
  )
}

export default Programming
