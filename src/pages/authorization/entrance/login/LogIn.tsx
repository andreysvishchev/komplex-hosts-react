import React from 'react';
import s from './../../../forms/Form.module.scss'
import FormInput from "../../../forms/components/FormInput/FormInput";





const LogIn = () => {
    return (
            <form className={s.form}>
               <FormInput caption={'Электронная почта'} placeholder={'Введите e-mail'} type={'email'} />
                <FormInput caption={'Пароль'} placeholder={'Введите пароль'} type={'password'} password={true} />
                <div className={s.form__row} style={{marginTop: '24px'}}>
                    <button className={s.button}>Вход</button>
                    <button className={s.recovery}>Забыли пароль?</button>
                </div>
            </form>
    );
};

export default LogIn;