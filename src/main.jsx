import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Routes/Root/Root";
import Home from "./Routes/Home/Home";
import Destination from "./Routes/Destination/Destination";
import Blog from "./Routes/Blog/Blog";
import Contact from "./Routes/Contact/Contact";
import News from "./Routes/News/News";
import Login from "./Routes/Login/Login";
import Register from "./Routes/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import Checkup from "./Routes/Checkup/Checkup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/checkup',
        element: <PrivateRoute><Checkup></Checkup></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  
  </React.StrictMode>
);
