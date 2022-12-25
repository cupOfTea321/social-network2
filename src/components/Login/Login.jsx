import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Input} from "../common/ControlForms/ControlForms";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return(
        <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}
const LoginForm = (props) => {
    return(
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  placeholder={"Login"} name={"log"}  validate={[requiredField, maxLengthCreator(10)]} component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"pass"}  validate={[requiredField, maxLengthCreator(10)]} component={Input}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"remember"} component={"input"}/> remember me
                </div>
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
export default Login;