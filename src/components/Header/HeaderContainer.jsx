import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserData} from "../../Redux/auth_reducer";


class HeaderContainer  extends React.Component{
    componentDidMount() {

        // UsersAPI.setUserData();
        this.props.getUserData();

    }
    render() {
        return(
            <Header {...this.props}/>
        );
    }



}
let mapStateToProps = (state) => ({

        isAuth: state.auth.isAuth,
        login: state.auth.login

})
export default connect(mapStateToProps, {
    getUserData
})(HeaderContainer) ;