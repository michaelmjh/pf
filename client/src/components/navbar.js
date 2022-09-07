import React from "react";

const NavBar = () => {

  return (
    <>
        <ul class='navBar'>      
            <li class='navBarItem'>
                <a class='navBarButton' href="#contact"><span>Get in Touch</span></a>
            </li>
            <li class='navBarItem'>
                <a class='navBarButton' href="#news">Fun Stuff</a>
            </li>
            <li class='navBarItem'>
                <a class='navBarButton' href="#contact">Projects</a>
            </li>
            <li class='navBarItem'>
                <a class='navBarButton' href="#news">Experience</a>
            </li>
            <li class='navBarItem'>
                <a class='navBarButton' href="#home">About</a>
            </li>
        </ul>
        
    </>
  );

}

export default NavBar;