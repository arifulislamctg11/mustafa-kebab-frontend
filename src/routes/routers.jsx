import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Authontaction/SignIn";
import SignUp from "../pages/Authontaction/SignUp";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path : '/signin',
          element: <SignIn/>
        },
        {
          path : '/signup',
          element: <SignUp/>
        }
     
      ],
    },
    
    
  ])
  