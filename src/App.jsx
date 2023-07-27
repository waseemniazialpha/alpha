import React from "react";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import StateCom from "./components/StateCom";
import { useState } from "react";
const App = () => {

  const [myStyle, setmyStyle] = useState({
    backgroundColor: 'white',
    color: 'black',
  })
  const [textChange, settextChange] = useState("Enable dark Mode")
  const enbale = () => {
    if (myStyle.color == 'black') {
      setmyStyle({
        backgroundColor: 'black',
        color: 'white',
      })
      settextChange("Enable light Mode")
    } else {
      setmyStyle({
        backgroundColor: 'white',
        color: 'black',
      })
      settextChange("Enable dark Mode")
    }
  }


  return (

    <>


      <div style={myStyle}>
        <Navbar />
        <UserDetails />
        <StateCom />
        <label class="switch">
          <input type="checkbox"  onClick={enbale} />
          <span class="slider round"></span>
        </label>
        {/* <button onClick={enbale}>{textChange}</button> */}
      </div>
    </>

  );
};

export default App;
