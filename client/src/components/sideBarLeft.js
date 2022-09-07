import React from "react";
import gitHubLogo from '../media/images/github.png'
import linkedInLogo from '../media/images/linkedin.png'

const SideBarLeft = () => {

  return (
    <>
      <div class='sblcontainer'>
        <img class='sblitem' src={gitHubLogo} width='40'></img>
        <img class='sblitem' src={linkedInLogo} width='40'></img>

      </div>
      
    </>
  );
}

export default SideBarLeft;