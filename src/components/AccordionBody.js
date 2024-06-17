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
    <div>
        {Data?.map(d=> 
            <div className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between" key={d.card.info.id}>
                <div className="w-9/12" >
                <div className="py-2 " >
                    <span>{d.card.info.name}</span>
                    <span> - ₹{d.card.info.price/100 || d.card.info.defaultPrice/100 || d.card.info.finalPrice/100}</span>
                </div>
                <p className="text-xs" >{d.card.info.description}</p>
                </div>
                <div className="w-3/12 " >
                  <div className="absolute">
                    <button className="p-2 rounded-lg hover:bg-gray-200 hover:text-black bg-black shadow-lg text-white  m-auto" onClick={()=>handleclick(d)} >Add+</button>
                  </div>
                  <img className="w-full " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+d.card.info.imageId} ></img>
                  
                </div>
            </div>
        )}
    </div>
  )
}

export default AccordionBody