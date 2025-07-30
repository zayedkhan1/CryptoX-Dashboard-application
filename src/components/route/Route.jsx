import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Transaction from "../pages/Transaction";
import Support from "../pages/Support";

const router=createBrowserRouter([
    {
        path:'',
        element:<Home></Home>
    },
    {
        path:'/transaction',
        element:<Transaction></Transaction>
    },
    {
        path:'/support',
        element:<Support></Support>
    }
])
export default router;