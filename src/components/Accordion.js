import React, { useState } from 'react'
import AccordionBody from './AccordionBody';

const Accordion = ({data}) => {
    const [showItems,setShowItems]=useState(false);
    // console.log(data);
    const handleClick=()=>{
      // console.log("clickkkk")
      setShowItems(!showItems);
    }
  return (
    <div>
        <div className="w-6/12 mx-auto my-4 shadow-xl bg-white ">
            <div className='p-4 flex justify-between cursor-pointer' onClick={handleClick} >
            <span className="font-bold text-lg" >{data.title} ({data?.itemCards?.length || data?.categories?.length})</span>
            <span>&#11167;</span>
            </div>
            {showItems && <AccordionBody Data={data?.itemCards || data?.categories[0]?.itemCards } ></AccordionBody>}
        </div>
    </div>
  )
}

export default Accordion