import React from 'react';
import logo from './../../../img/logo-header.svg'
import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.wrap}>
            <div className={s.logo}>
                <img src={logo} alt="логотип"/>
            </div>
            <div className={s.inner}>
                <h2 className={s.page}>Услуги</h2>
                <div className={s.menu}>
                    <a className={s.balance}>245 982 ₽</a>
                    <div className={s.alerts}>
                        <a href="#" className={`${s.mail} ${s.active}`}></a>
                        <a href="#" className={`${s.notifications} ${s.active}`}></a>
                    </div>
                    <a href="#" className={s.logout}>Выйти</a>
                </div>
            </div>
        </header>
    );
};

export default Header;