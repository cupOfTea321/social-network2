import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import { FaBootstrap, FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';


const Header = (props) => {

    return(
    <header>
        <div className={classes.h1}>FlexMess.</div>
        <div className={classes.h2}>
            <input placeholder="Search for..."/>
        </div>

        <div className={classes.h3}>
            <span>
                Technologies:
            </span>
            <span className={classes.icons}>
                <a href='#'><FaHtml5/></a>
                <a href='#'><FaBootstrap/></a>
                <a href='#'><FaCss3Alt/></a>
                <a href='#'><FaReact/></a>
                <a href='#'><FaJsSquare/></a>
            </span>

        </div>

        <div className={classes.h4}>
            {props.isAuth ? <div>
                {props.login} - <button onClick={props.logout}>Log out</button>
            </div>  : <NavLink to={'/login/'}>Login</NavLink>}


        </div>
    </header>
    );

}

export default Header;