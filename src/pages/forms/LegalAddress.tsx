import React, {useState} from 'react';
import s from './Form.module.scss'

import FormInput from "./components/FormInput/FormInput";
import FormSelect from "./components/FormSelect/FormSelect";
import {
    Button,
    createMuiTheme,
    createTheme,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    ThemeProvider
} from "@mui/material";
import {button, theme} from "../../style/style";



const LegalAddress = () => {




    return (
        <form className={s.form}>
            <div className={s.form__row}>
                <FormInput caption={'Индекс'}/>
                <FormSelect caption={'Страна'} placeholder={'Введите страну'}/>
            </div>
            <FormSelect caption={'Область'} placeholder={'Введите область'}/>
            <FormSelect caption={'Район/Округ'} placeholder={'Введите район или округ'}/>
            <FormSelect caption={'Населенный пункт'} placeholder={'Введите населенный пункт'}/>
            <FormInput caption={'Улица'}/>
            <div className={s.form__row} style={{marginBottom: '16px'}}>
                <FormInput caption={'Дом'}/>
                <FormInput caption={'Квартира/Корпус'}/>
            </div>
            <ThemeProvider theme={theme}>
                <Button style={button} variant="contained">Отправить запрос на изменение</Button>
            </ThemeProvider>


        </form>
    );
};

export default LegalAddress;
