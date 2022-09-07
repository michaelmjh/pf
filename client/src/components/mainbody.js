import React from "react";
import SideBarLeft from "./sideBarLeft";
import SideBarRight from "./sideBarRight";
import MainDetails from "./mainDetails";

const MainBody = () => {

  return (
    <>
      <div class='split left'>
        <SideBarLeft />
      </div>    
      <div class='split center'>
        <MainDetails />
      </div>   
      <div class='split right'>
        <SideBarRight />
      </div>
    </>
  );
}

export default MainBody;