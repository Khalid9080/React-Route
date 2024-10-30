import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
// import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Clients from './components/Clients/Clients.jsx'
import Contact from './components/Contact/Contact.jsx'






/*
--> header and footer shob route er jonno common thakbe
--> ami kon route a jaite cai onushare majhkhane ongsho ta change korbo.
--> kno component a jaite caile amra state use korte pari.
--> users a gele amder data ta drkr / or onno jekono jaegae gele data drkr erokom hole,
    loader function ()=>fetch('') use kore fetch kore korbo
--> amra Users.jsx file a useLoaderData() hook use korbo
--> amara alad alada vabe data dekhabo alada component er jonno eta k dainamic routing bole
-->  ${params.clientId} er maddhomoe data pawar por </UserDetails> component a useLoaderData() hook use kore data dekhabo


*/
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserDetails from './components/UserDetails/UserDetails.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },


      {
        path: '/Clients',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Clients></Clients>
      },
// clientId -> dile static thakbe, jsut ekta page a jabe,
// client/:clientId -> dynamic thakbe, jekono client er jonno jabe
// ${params.clientId} -> dynamic route er jonno amra use Params() hook use korbo
      {
        path: '/client/:clientId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.clientId}`)
        .then(res=>res.json()),
        element:<UserDetails></UserDetails>
      }
    ]
  },

 
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
