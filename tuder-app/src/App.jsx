import Navbar from "./component/Navbar/Navbar";

import "./App.css";
import MainBody from "./component/MainBody/MainBody";
import { useContext, useState } from "react";
import { ClickedContext } from "./component/Context/Context";
import LoginPage from "./component/LoginPage/LoginPage";

function App() {
  const [homeStatus,setHomeStatus] = useState(true);

  return (
    <>
      <ClickedContext.Provider value={{ homeStatus, setHomeStatus }}>
        <Navbar />
        {
          homeStatus? <MainBody/> : <LoginPage/>
        }
        
      </ClickedContext.Provider>
    </>
  );
}

export default App;
