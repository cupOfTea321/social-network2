
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Main/Profile/Profile";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


function App(props) {

  return (

    <div className="App">
      <Header/>
      <SideBar/>

        <div className="main">
          <Routes>
            <Route path="/" element={<Profile post={props.post} updatePostText={props.updatePostText} allData={props.allData}/>}/>
            <Route path="/profile" element={<Profile  post={props.post} updatePostText={props.updatePostText} allData={props.allData}/>}/>
            <Route path="/dialogs" element={<Dialogs allData={props.allData} addMess={props.addMess}/>}/>

          </Routes>
        </div>

    </div>

  );
}

export default App;
