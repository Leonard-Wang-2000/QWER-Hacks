import React from 'react'
import "./NavBar.css"

class NavBar extends React.Component{
    render = () => {
        return(
            <div className = "navBar">
                <a href="/" className = "navBar" >Home</a> |      
                <a href="/login" className = "navBar">Login</a> |
                <a href="/categories" className = "navBar">Categories</a>
            </div>
        )
    }
}



export default NavBar