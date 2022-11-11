
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
            <Route path="/" element={<Profile updatePostText={props.store.updatePostText}
                                              state={props.store.getState()}
                                              addPost={props.store.addPost}/>}/>
            <Route path="/profile" element={<Profile updatePostText={props.store.updatePostText}
                                                     state={props.store.getState()}
                                                     addPost={props.store.addPost}/>}/>
            <Route path="/dialogs" element={<Dialogs state={props.store.getState()}
                                                     addMess={props.store.addMess}/>}/>

          </Routes>
        </div>

    </div>

  );
}

export default App;
