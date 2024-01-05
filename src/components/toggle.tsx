import React from "react";

function Toogle({handleToggleChange}: any) {
  return (
    <div>
       <input type="checkbox" id="theme-switcher" onClick={handleToggleChange}/>
  <div id="app-container">
    <div className="theme-switcher-area">
      <label htmlFor="theme-switcher" className="theme-switcher-button">
      </label>
    </div>
  </div>
     </div>
  );
}

export default Toogle;
