import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About.tsx';
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import Work from './pages/Work.tsx';
import { WorkDetail } from './pages/WorkDetail.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
     children: [
       {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
       },
       {
        path: "/services",
        element: <Services />,
       },
       {
        path: "/work",
        element: <Work />,
       },
       {
        path: "/work/:projectName",
        element: <WorkDetail />,
       },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
