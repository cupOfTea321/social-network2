
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Main/Profile/Profile";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {

  return (
      <BrowserRouter >
    <div className="App">
      <Header/>
      <SideBar/>

        <div className="main">
          <Routes>
            <Route path="/" element={<Profile/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/dialogs" element={<Dialogs allData={props.allData}/>}/>

          </Routes>
        </div>

    </div>
      </BrowserRouter>
  );
}

export default App;
