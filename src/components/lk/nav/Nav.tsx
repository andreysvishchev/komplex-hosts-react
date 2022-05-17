import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.wrap}>

            <div className={s.user}>
                <span className={s.user__name}>N3245wexc</span>
                <span className={s.user__address}>Филиал ФГУП НПО Микр</span>
            </div>

            <h3 className={s.title}>Личный кабинет</h3>

            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to="/services" className={`${s.link} ${s.services}`}>Услуги</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/union" className={`${s.link} ${s.union}`}>Платежи</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/notifications" className={`${s.link} ${s.notification}`}>Уведомления</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/support" className={`${s.link} ${s.supp}`}>Техподдержка</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/docs" className={`${s.link} ${s.docs}`}>Документы</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/profile" className={`${s.link} ${s.profile}`}>Профиль</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/faq" className={`${s.link} ${s.faq}`}>FAQ</NavLink>
                </li>
            </ul>
            <div className={s.support}>
                <h5 className={s.support__title}>Техподдержка</h5>
                <div className={s.support__item}>
                    <h6 className={s.support__caption}>Skype</h6>
                    <a href="#" className={s.support__link}>Komplex-Host</a>
                </div>
                <div className={s.support__item}>
                    <h6 className={s.support__caption}>Телефон</h6>
                    <a href="tel: +78312239966" className={s.support__link}>+7 (831) 223-99-66</a>
                </div>
                <div className={s.support__item}>
                    <h6 className={s.support__caption}>WhatsApp/Viber</h6>
                    <a href="#" className={s.support__link}>+7 (905) 194-27-76</a>
                </div>
                <div className={s.support__item}>
                    <h6 className={s.support__caption}>Почта</h6>
                    <a href="mailto:support@komplex-host.ru" className={s.support__link}>support@komplex-host.ru</a>
                </div>
            </div>
            <div className={s.copyright}>
                <span> 2006 - 2022 «Комплекс-Хост».</span>
                <span> Все права защищены.</span>
                <a href="#"> Политика конфиденциальности</a>
                <a href="#"> Политика в отношении обработки персональных данных</a>
            </div>
        </nav>

    );
};

export default Nav;