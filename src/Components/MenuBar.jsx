import React from "react";

const MenuBar = () => {
    return (
        <>
         <div className="menu-bar">
<div className="logo">
  <img src="/assets/logo.jpg" alt="logo" />
  <p>TrackMe</p>
</div>

<div className="menu-btn">

  <i class="fa-solid fa-bell notify"></i>
 
  <button className="login">Loign</button>
  <button className="signup">SignUp</button>
</div>

   </div>
        
        </>
    )
}

export default MenuBar;