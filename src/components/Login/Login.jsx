import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Input} from "../common/ControlForms/ControlForms";
import {connect} from "react-redux";
import {login} from "../../Redux/auth_reducer";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    // if (props.isAuth){
    //     return <Routes>
    //         <Route path="/profile/*" element={<ProfileContainer /> }/>
    //     </Routes>
    // }
    return(
        <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}
const LoginForm = ({handleSubmit, error}) => {
    return(
            <form onSubmit={handleSubmit}>
                <div>
                    <Field  placeholder={"Email"} name={"email"}  validate={[requiredField, maxLengthCreator(40)]} component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={"password"} validate={[requiredField, maxLengthCreator(20)]} component={Input}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>
                { error &&
                    <div >
                        {error}
                    </div>
                }

                <div>
                    <button>Log In</button>
                </div>
            </form>
    );
}

// Функция, возвращающая НОС
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);