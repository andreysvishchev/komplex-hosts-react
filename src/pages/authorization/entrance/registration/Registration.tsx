import React from 'react';
import s from "../../../forms/Form.module.scss";
import FormInput from "../../../forms/components/FormInput/FormInput";


const Registration = () => {
    const style = {
        marginBottom: 0
    }
    return (
        <form className={s.form}>
            <FormInput caption={'Электронная почта'} placeholder={'Введите e-mail'} type={'email'} />
            <FormInput caption={'Пароль'} placeholder={'Введите пароль'} type={'password'} password={true} style={style} />
            <p className={s.recommendation}>Минимальный размер пароля 8 символов, минимум один спец. символ (!@#$%^) и одна цифра</p>
            <FormInput caption={'Пароль'} placeholder={'Введите пароль'} type={'password'} password={true} />
            <div className={s.form__row} style={{marginTop: '24px', justifyContent: "flex-end"}}>
                <button className={s.button}>Вход</button>
            </div>
        </form>
    );
};

export default Registration;