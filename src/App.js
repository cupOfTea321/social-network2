
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import SideBar from "./components/SideBar/SideBar";


import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";



function App(props) {

  return (

    <div className="App">
      <HeaderContainer/>
      <SideBar/>

        <div className="main">
          <Routes>
            <Route path="/" element={<ProfileContainer /> }/>
            <Route path="/profile/*" element={<ProfileContainer /> }/>
            <Route path="/dialogs" element={<DialogsContainer />}/>
            <Route path="/friends" element={<FriendsContainer/>}/>
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
        </div>

    </div>

  );
}

export default App;
