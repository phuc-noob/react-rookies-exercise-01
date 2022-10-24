import './Navbar.css'
import {useState} from 'react'

function Navbar() {
    const [username,setUsername] = useState("Phan Vinh Phuc")

    return (
        <nav id='navbar'>
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="#"><li>About</li></a>
            </ul>

            <div className="nav-details">
                <p className="nav-username"> {username} </p>
            </div>
        </nav>
    )
}

export default Navbar;