import React from 'react'
import { useLocation } from 'react-router-dom';
function Progcatat() {
    let location = useLocation();

    React.useEffect(() => {
      console.log(location)
    }, [location]);
  return (
    <div className='progCat'>
      <button className='progactitem'>C++</button>
      <div className='progactitem'>Java</div>
      <div className='progactitem'>Python</div>
      <div className='progactitem'>Javascript</div>
    </div>
  )
}

export default Progcatat
