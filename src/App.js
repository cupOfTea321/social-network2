
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Main/Profile/Profile";

import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";


function App(props) {

  return (

    <div className="App">
      <Header/>
      <SideBar/>

        <div className="main">
          <Routes>
            <Route path="/" element={<Profile /> }/>
            <Route path="/profile" element={<Profile /> }/>
            <Route path="/dialogs" element={<DialogsContainer />}/>

          </Routes>
        </div>

    </div>

  );
}

export default App;
