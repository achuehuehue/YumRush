import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.js";
import Body from "./components/body.js";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/about.js";
import Error from "./components/error.js";
import Menu from "./components/menu.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/cart.js";
import Login from "./components/login.js";
import Contact from "./components/Contact.js";
import Footer from "./components/footer.js";


const AppLayout=()=>{
    return (
   <Provider store={appStore}>
     <div className="">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
   </Provider>)
};
const appRouter=createBrowserRouter([
{
    path:"/",
    element:<AppLayout></AppLayout>,
    children:[
        {
            path:"/",
            element:<Body></Body>,
        },
        {
            path:"/About",
            element:<About></About>,
        },
        {
            path:"/Restaurants/:resId",
            element:<Menu></Menu>,
        },
        {
            path:"/Cart",
            element:<Cart></Cart>
        },
        {
            path:"/Login",
            element:<Login></Login>
        },
    ],
    errorElement:<Error></Error>,
},

]);
const root=ReactDOM.createRoot(document.querySelector('.main'));

root.render(<RouterProvider router={appRouter} ></RouterProvider>);
