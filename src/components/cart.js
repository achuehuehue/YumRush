import { useDispatch, useSelector } from "react-redux"
import AccordionBody from "./AccordionBody";
import { clearItems } from "../utils/cartSlice";


const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items);
    let total=0;
    cartItems.map(d => total+=(d.card.info.price/100 || d.card.info.defaultPrice/100 || d.card.info.finalPrice/100))
    const dispatch=useDispatch();
    const handleClick=()=>{
      dispatch(clearItems());
    }

    const makePayment = () => {
      console.log("Hello")
    }

  return (
    <div className="text-center my-[100px] p-4">
        <h1 className="text-2xl font-bold" >Cart</h1>
        <div className="w-1/2 m-auto">
        <button className="rounded shadow-lg bg-black text-white m-4 px-3 py-2 ransition-colors duration-100 hover:bg-gray-300 hover:text-black" onClick={handleClick}>Clear Cart</button>
        {cartItems.length===0 && <h1>Cart is empty!!</h1>}
          <AccordionBody Data={cartItems} ></AccordionBody>
          {cartItems.length!=0 && 
          (<div>
            <p className="mb-[10px]">Total : ₹ {total} </p> 
            <button className="bg-black text-white px-4 py-2 rounded-md transition-colors duration-100 hover:bg-gray-300 hover:text-black" onClick={makePayment}>Pay Now</button>
          </div>)}
        </div>
    </div>
  )
}

export default Cart