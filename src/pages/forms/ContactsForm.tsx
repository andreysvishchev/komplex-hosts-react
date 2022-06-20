import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import FormSelect from "./components/FormSelect/FormSelect";
import {Button, ThemeProvider} from "@mui/material";
import {button, theme} from "../../style/style";

const ContactsForm = () => {
    return (
        <div>
            <form className={s.form}>
                <div className={s.form__title}>Контактное лицо по техническим вопросам</div>
                <FormInput caption={'Фамилия'} placeholder={'Введите фамилию'}/>
                <FormInput caption={'Имя'} placeholder={'Введите имя'}/>
                <FormInput caption={'Отчество'} placeholder={'Введите отчество'}/>
                <FormInput caption={'Электронная почта'} type={'email'} placeholder={'Введите e-mail'}/>
                <FormInput caption={'Номер телефона'} type={'tel'} placeholder={'Введите телефон'}/>
                <div style={{marginTop: '32px'}} className={s.form__title}>Контактное лицо по финансовым вопросам</div>
                <FormInput caption={'Фамилия'} placeholder={'Введите фамилию'}/>
                <FormInput caption={'Имя'} placeholder={'Введите имя'}/>
                <FormInput caption={'Отчество'} placeholder={'Введите отчество'}/>
                <FormInput caption={'Электронная почта'} type={'email'} placeholder={'Введите e-mail'}/>
                <FormInput caption={'Номер телефона'} type={'tel'} placeholder={'Введите телефон'}/>
                <button style={{marginTop: '16px'}} className={s.button}>Сохранить</button>
            </form>
        </div>
    );
};

export default ContactsForm;