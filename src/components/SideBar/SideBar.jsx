import s from './SideBar.module.css'
import {NavLink} from "react-router-dom";
const SideBar = () => {
    const setActive = ({isActive}) => isActive ? s.activeLink : s.link;
    return(
        <div className={s.side_bar}>
            <div className={s.new_feeds}>
                <p className="grey_text">New Feeds</p>
                <NavLink className={s.link} to="#s">Newsfeed</NavLink>
                <NavLink className = { setActive } to="/dialogs">Messages</NavLink>
                <NavLink className={s.link} to="#s">Explore Stories</NavLink>
                <NavLink className={s.link} to="#s">Popular Groups</NavLink>
                <NavLink to="/profile" className = { setActive }>Profile</NavLink>


            </div>
        </div>
        );

}

export default SideBar;