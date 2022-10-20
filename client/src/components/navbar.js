import React from "react";

const NavBar = ({navbarData}) => {
    
    const navbarMapper = navbarData.map((menuOption, index) => {
        var navbarText = menuOption[0]
        var navbarURL = menuOption[1]
        
        return (
            <li class='navBarItem'>
                <a class='navBarButton' key='{index}' href={navbarURL}><span>{navbarText}</span></a>
            </li>
        )
    });

    return (
        <>
            <ol class='navBar'>      
                {navbarMapper}
            </ol>
            
        </>
    );

}

export default NavBar;