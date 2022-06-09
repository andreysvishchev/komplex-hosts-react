import React, {useState} from 'react';
import s from './Form.module.scss'

import FormInput from "./components/FormInput/FormInput";
import FormSelect from "./components/FormSelect/FormSelect";


const LegalAddress = () => {



    return (
        <form className={s.form}>
            <div className={s.form__row}>
                <FormInput caption={'Индекс'}/>
                <FormSelect caption={'Страна'}/>
            </div>
            <FormSelect caption={'Область'}/>
            <FormSelect caption={'Район/Округ'}/>
            <FormSelect caption={'Населенный пункт'}/>
            <FormInput caption={'Улица'}/>
            <div className={s.form__row}>
                <FormInput caption={'Дом'}/>
                <FormInput caption={'Квартира/Корпус'}/>
            </div>
            <button className={s.button}>Отправить запрос на изменение</button>
        </form>
    );
};

export default LegalAddress;