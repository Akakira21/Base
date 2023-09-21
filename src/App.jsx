import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Layout from './Layout/Layout'
import Error from './Pages/Error/Error'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <Error/>,
      children:[
        {
          path: "/contact",
          element: <Contact/>,
          errorElement: <Error/>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
