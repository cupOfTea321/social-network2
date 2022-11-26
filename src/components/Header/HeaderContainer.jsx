import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth_reducer";

class HeaderContainer  extends React.Component{
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            let {id, email, login} = response.data.data;
            this.props.setUserData(id, email, login);
        });
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
    setUserData
})(HeaderContainer) ;