import classes from './Header.module.css';


const Header = () => {

    return(
    <header>
        <div className={classes.h1}>FlexMess.</div>
        <div className={classes.h2}>
            <input placeholder="Search for..."/>
        </div>
        <div className={classes.h3}>pages</div>
        <div className={classes.h4}>icons</div>
    </header>
    );

}

export default Header;