import React from 'react';
import style from './LogIn.module.scss'





const LogIn = () => {
    return (
        <div className={style.wrap}>
            <div className={style.tabs}>
                <div className={style.tabs__buttons}>
                    <ul className={style.tabs__list}>
                        <li className={style.tabs__item}>
                            <button className={style.tabs__button} >
                                Вход
                            </button>
                        </li>
                        <li className={style.tabs__item}>
                            <button className={style.tabs__button} data-tabs-path="registration">
                                Регистрация
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={style.tabs__content} data-tabs-target="enter">

                        <form className="login-form" action="#">
                            <h4 className="login-form__title">Номер телефона или e-mail</h4>
                            <input type="email" className="login-form__input" placeholder="Введите телефон или e-mail" required/>
                                <h4 className="login-form__title">Пароль</h4>
                                <label className="login-form__label">
                                    <input type="password" className="login-form__input login-form__input--no-margin"
                                           placeholder="Введите пароль" required/>
                                        <span className="login-form__password-type"></span>
                                </label>
                                <div className="login-form__row login-form__row--enter">
                                    <button className="login-form__btn login-form__btn--blue" type="submit">
                                        Вход
                                    </button>
                                    <a href="#" className="login-form__help">Забыли пароль?</a>
                                </div>
                        </form>

                </div>
                <div className={style.tabs__content} data-tabs-target="registration">

                        <form className="login-form" action="#">
                            <h4 className="login-form__title">Электронная почта</h4>
                            <input type="email" className="login-form__input" placeholder="Введите e-mail" required/>
                                <h4 className="login-form__title">Пароль</h4>
                                <label className="login-form__label">
                                    <input type="password" className="login-form__input login-form__input--no-margin"
                                           placeholder="Введите пароль" required/>
                                        <span className="login-form__password-type"></span>
                                        <p className="login-form__recommendation">
                                            Минимальный размер пароля 8 символов, минимум один спец. символ (!@#$%^) и
                                            одна цифра
                                        </p>
                                </label>
                                <h4 className="login-form__title">Подтвердите пароль</h4>
                                <label className="login-form__label">
                                    <input type="password" className="login-form__input login-form__input--no-margin"
                                           placeholder="Подтвердите пароль" required/>
                                        <span className="login-form__password-type"></span>
                                </label>
                                <button className="login-form__btn login-form__btn--blue login-form__btn--right"
                                        type="submit">
                                    Далее
                                </button>
                        </form>
                    </div>

            </div>

        </div>
    );
};

export default LogIn;