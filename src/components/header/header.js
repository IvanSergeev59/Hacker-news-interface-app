import React from "react";
import logo from "../../images/logo.jpg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="app-header">
            <Link to="/"><img src={logo}></img></Link>
            <h1>Что в мире творится?</h1>
            <p>Находите самые актуальные новости, посвященные информатике и предпринимательству, а также, комментарии к ним!</p>
        </header>
    )
}

export default Header