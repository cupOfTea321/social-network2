import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import SideBar from "./components/SideBar/SideBar";
import {Route, Routes} from "react-router-dom";

import React, {Component, Suspense} from 'react';

import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer, {withRouter} from "./components/Main/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app_reducer";
import Loader from "./components/common/Loader/Loader";
import Technologies from "./components/Technologies/Technologies";

// import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Main/Dialogs/DialogsContainer'));

class App extends Component {
    componentDidMount() {


        this.props.initializeApp();

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.initializeApp();
    }

    render() {

    // if (!this.props.initialized){
    //     return <Loader/>
    // }

    return (

        <div className="App">
          <HeaderContainer/>
          <SideBar/>

          <div className="main">
              <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                      <Route path="/" element={<ProfileContainer/>}/>
                      <Route path="/profile/*" element={<ProfileContainer/>}/>
                      <Route path="/dialogs" element={<DialogsContainer/>}/>
                      <Route path="/friends" element={<FriendsContainer/>}/>
                      <Route path="/login" element={<LoginPage/>}/>
                      <Route path="/techno" element={<Technologies/>}/>
                  </Routes>
              </Suspense>

          </div>

        </div>

    );
  }
}

const mapStateToProps = (state) => ({

    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App) ;
