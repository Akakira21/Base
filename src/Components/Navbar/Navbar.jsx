import {Link} from "react-router-dom"
import styles from "./Navbar.module.scss"

function Navbar (){
    return (
        <div className={styles.navbar}>
            <nav>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/About">About</Link></li>
                </ul>
            </nav>

        </div>
    )
}


export default Navbar