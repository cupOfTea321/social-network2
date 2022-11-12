
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
            <Route path="/" element={<Profile dispatch={props.store.dispatch.bind(props.store)}
                                              state={props.store.getState()}/> }/>
            <Route path="/profile" element={<Profile dispatch={props.store.dispatch.bind(props.store)}
                                                     state={props.store.getState()}/> }/>
            <Route path="/dialogs" element={<Dialogs state={props.store.getState()}
                                                     dispatch={props.store.dispatch.bind(props.store)}/>}/>

          </Routes>
        </div>

    </div>

  );
}

export default App;
