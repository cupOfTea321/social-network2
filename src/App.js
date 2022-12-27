import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import SideBar from "./components/SideBar/SideBar";


import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer, {withRouter} from "./components/Main/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app_reducer";
import Loader from "./components/common/Loader/Loader";


class App extends Component {
    componentDidMount() {


        this.props.initializeApp();

    }
  render() {
      // debugger
    if (!this.props.initialized){
        return <Loader/>
    }

    return (

        <div className="App">
          <HeaderContainer/>
          <SideBar/>

          <div className="main">
            <Routes>
              <Route path="/" element={<ProfileContainer/>}/>
              <Route path="/profile/*" element={<ProfileContainer/>}/>
              <Route path="/dialogs" element={<DialogsContainer/>}/>
              <Route path="/friends" element={<FriendsContainer/>}/>
              <Route path="/login" element={<LoginPage/>}/>
            </Routes>
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
