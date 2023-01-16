import React from 'react';
import st from './Technologies.module.css'
import { FaVk, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import {NavLink} from "react-router-dom";
const Technologies = () => {
    return (
        <main className={st.main} >

            <div className={st.main_right}>
                <h2>Technologies</h2>
                <p>This website created by:</p>
                <p>
                    <strong>Java Script </strong>
                    JavaScript, often abbreviated as JS, is a programming language that is
                    one of the core technologies of the World Wide Web
                </p>
                <p>
                    <strong>CSS 3 </strong>
                    Cascading Style Sheets is a style sheet language used for describing the presentation of
                    a document written in a markup language
                </p>
                <p>
                    <strong>React JS </strong>
                    React is a free and open-source front-end JavaScript library for building user interfaces based on UI components
                </p>
                <p>
                    <strong>HTML 5 </strong>
                    The HyperText Markup Language or HTML is the standard markup language for
                    documents designed to be displayed in a web browser
                </p>
            </div>
            <div className={st.main_left}>
                <h2>Contacts</h2>
                <div>
                    <button><NavLink to={''}>VKontakte:  <FaVk /></NavLink></button>
                </div>
                <div>
                    <button><NavLink to={''}>Facebook: <FaFacebookF/></NavLink></button>
                </div>
                <div>
                    <button><NavLink to={''}>Telegram: <FaTelegramPlane/></NavLink></button>
                </div>





            </div>
        </main>
    );
};

export default Technologies;