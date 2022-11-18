import React, { useState } from 'react'


const ProgrammingCard = (props) => {
    const [dropstate,setDropState] = useState(false);

    function dropChange() {
        if(dropstate === false){
        setDropState(true);}
        else{
            setDropState(false);
        }
    }
  return (
   
      
      <div className="progcontainer shadow-sm ">
        <div className="dropbtn shadow-lg" onClick={dropChange}>{props.langheading}
        <input type="checkbox" name="" id="" />
        </div>
        { dropstate &&
        <div className="dropitem">
            <div className="item">Pattern</div>
            <div className="item">Linked List</div>
        </div>
        }
      </div>

    
  )
}

export default ProgrammingCard
