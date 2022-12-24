import {Field, reduxForm} from "redux-form";

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
                    <Field placeholder={"Login"} name={"log"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"pass"} component={"input"}/>
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