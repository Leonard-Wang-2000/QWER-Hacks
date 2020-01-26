import React from 'react'
import {Link} from "react-router-dom"

class NavBar extends React.Component{
    render = () => {
        return(
            <ul>
                <li>
                    <Link to = "/">Home</Link> 
                </li>
                <li>
                    <Link to = "/login">Login</Link> 
                </li>
                <li>
                    <Link to = "/categories">Categories</Link> 
                </li>
            </ul>
        )
    }
}

export default NavBar