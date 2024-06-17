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

  return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold" >Cart</h1>
        <div className="w-1/2 m-auto">
        <button className="rounded shadow-lg bg-black text-white m-4 p-4" onClick={handleClick}>Clear Cart</button>
        {cartItems.length===0 && <h1>Cart is empty!!</h1>}
          <AccordionBody Data={cartItems} ></AccordionBody>
          {cartItems.length!=0 && <p>Total : ₹ {total} </p>}
        </div>

    </div>
  )
}

export default Cart