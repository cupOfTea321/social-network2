

import {addMessActionCreator} from "../../../Redux/dialogs_reducer";


import {connect} from "react-redux";


import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,

    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        sendMess: (text) => {
            let action = addMessActionCreator(text);
            dispatch(action);
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // Вызов HOC
    withAuthRedirect
)(Dialogs);