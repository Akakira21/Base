import {useLocation, Outlet} from 'react-router-dom'
import Home from "../Pages/Home/Home"
import Navbar from "../Components/Navbar/Navbar"

function Layout (){

    const {pathname} = useLocation();

    return(
        <>
        <Navbar/>
        {pathname === "/" ? <Home/> : <Outlet/>}
        </>
    )
}

export default Layout