import React from "react";

const NavBar = () => {

  return (
    <>
        <ol class='navBar'>      
            <li class='navBarItem'>
                <a class='navBarButton' href="#contact"><span>Get in Touch</span></a>
            </li>
            <li class='navBarItem'>
                <a class='navBarButton' href="#fun">Fun Stuff</a>
            </li>
            <li class='navBarItem'>
                <a class='navBarButton' href="#experience">Other Experience</a>
            </li>
            <li class='navBarItem'>
                <a class='navBarButton' href="#projects">Projects</a>
            </li>
            <li class='navBarItem'>
                <a class='navBarButton' href="#about">About</a>
            </li>
        </ol>
        
    </>
  );

}

export default NavBar;