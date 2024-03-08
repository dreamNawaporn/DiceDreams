import {createBrowserRouter} from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home';
import Createpost from "../pages/CreatePost";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        //{
        //    path: "/shop",
        //    element: <Createpost/>
        //}
      ]
    },
  ]);



export default router