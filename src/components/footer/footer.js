import React from "react";
import me from "../../images/me.jpeg"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={me}></img>
            <div className="footer__description">
                <p>Привет! Меня зовут Иван. Я фронтенд разработчик.</p>
                <p>Данный проект является тестовым заданием от Avito-tech.</p>
                <p>Приложение позволяет получить актуальные новости с оффициального API "Hacker News", перейти на струницу с для подробной информации о заинтересовавшей новости и ознакомиться с комментариями к ней.</p>
            </div>
        </footer>
    )
}

export default Footer