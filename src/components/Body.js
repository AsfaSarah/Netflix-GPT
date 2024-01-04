import {RouterProvider, createBrowserRouter, useNavigate} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase';

import Browse from "./Browse";
import Login from "./Login";


const Body = () => {



    const appRouter= createBrowserRouter([
        {
            path:"/",
            element:<Login/>,

        },
        {
            path:"/browse",
            element:<Browse/>,
        },
    ]);

  

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;
