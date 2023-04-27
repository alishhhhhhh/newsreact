import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './components/NavBar'
import News from './components/News'
import * as ReactDOM from "react-dom";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


    const router = createBrowserRouter([
      {
      
          path: "/",
          element:<NavBar/>,
          children:[
            {
              path:'/okk',  element:<News category="health" />,
            },

            {
              path: "/health",
              element:<News category='health' />,
            },
            {
              path: "/Technology",
              element:<News category="technology" />,
            },
          
            {
              path: "/entertainment",
              element:<News category="entertainment" />,
            },

          ]
    
      },
    ]);
  
  
    //   {
    //     path: "/",
       
    //   },
     
    

 
    // ])
      
 
    
    
 
export default router;
