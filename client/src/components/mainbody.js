import React from "react";
import SideBarLeft from "./sideBarLeft";
import SideBarRight from "./sideBarRight";
import MainLanding from "./mainLanding";
import MainAbout from "./mainAbout";
import MainExperience from "./mainExperience";
import MainProjects from "./mainProjects";
import MainFunStuff from "./mainFunStuff";
import MainGetInTouch from "./mainGetInTouch";

const MainBody = () => {

  return (
    <>
      <div class='split left'>
        <SideBarLeft />
      </div>    
      <div class='split center'>
        <MainLanding />
        <MainAbout />
        <MainProjects />
        <MainExperience />
        <MainFunStuff />
        <MainGetInTouch />
      </div>   
      <div class='split right'>
        <SideBarRight />
      </div>
    </>
  );
}

export default MainBody;