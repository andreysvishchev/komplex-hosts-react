import s from './Form.module.scss'
import FormInput from "./components/FormInput/FormInput";
import FormSelect from "./components/FormSelect/FormSelect";
import {
    Button,
    ThemeProvider
} from "@mui/material";
import {button, theme} from "../../style/style";



const AddressForm = () => {

    return (
        <form className={s.form}>
            <div className={s.form__row}>
                <FormInput caption={'Индекс'} type={'number'} placeholder={'_ _ _ _ _ _'}/>
                <FormInput caption={'Страна'} placeholder={'Введите страну'}/>
            </div>
            <FormInput caption={'Область'} placeholder={'Введите область'}/>
            <FormInput caption={'Район/Округ'} placeholder={'Введите район или округ'}/>
            <FormInput caption={'Населенный пункт'} placeholder={'Введите населенный пункт'}/>
            <FormInput caption={'Улица'} placeholder={'Введите улицу'}/>
            <div className={s.form__row} style={{marginBottom: '16px'}}>
                <FormInput caption={'Дом'} placeholder={'Номер дома'}/>
                <FormInput caption={'Квартира/офис'} placeholder={'Номер квартиры/офиса'}/>
            </div>
            <ThemeProvider theme={theme}>
                <Button type={"submit"} style={button} variant="contained">Отправить запрос на изменение</Button>
            </ThemeProvider>
        </form>
    );
};

export default AddressForm;
