
import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../../Redux/profile_reducer";
import {

    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component{

    componentDidMount() {

        let profileId = this.props.router.params['*'];
        if (!profileId){
            profileId = 2;
        }
        this.props.getUserProfile(profileId);
        this.props.getStatus(profileId);

    }
    render() {

        return (
        <Profile {...this.props} profile={this.props.profile}
                 status={this.props.status} updateStatus={this.props.updateStatus} />
    )

    }

}


let  mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // Вызов HOC
    withAuthRedirect,

)(ProfileContainer);
