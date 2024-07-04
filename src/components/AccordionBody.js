import React from 'react'
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';

  const arr=[];
const AccordionBody = ({Data}) => {
    // console.log(Data)
    // const price=d.card.info.price || d.card.info.defaultPrice || d.card.info.finalPrice;
    const dispatch=useDispatch();
    const handleclick=(d)=>{
      dispatch(addItems(d))
    }
    
  return (
    <div className='w-[100%] flex flex-col items-center mb-[50px]'>
        {Data?.map(d=> 
            <div className="w-full p-2 border-gray-400 border-b-2 text-left flex justify-between" key={d.card.info.id}>
                <div className="w-[60%]">
                <div className="py-2 " >
                    <span>{d.card.info.name}</span>
                    <span> - ₹{d.card.info.price/100 || d.card.info.defaultPrice/100 || d.card.info.finalPrice/100}</span>
                </div>
                <p className="hidden md:inline-block md:text-xs text-justify" >{d.card.info.description}</p>
                </div>
                <div className="w-[40%] mx-2">
                  <div className="absolute">
                    <button className="text-sm py-2 md:text-md md:p-2 rounded-lg hover:bg-gray-200 hover:text-black bg-black shadow-lg text-white  m-auto" onClick={()=>handleclick(d)} >Add+</button>
                  </div>
                  <img className="w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+d.card.info.imageId} ></img>
                </div>
            </div>
        )}
    </div>
  )
}

export default AccordionBody