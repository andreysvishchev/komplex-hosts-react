import React from 'react';
import s from "../../Form.module.scss";
import Select from "react-select";

type PropsType = {
    caption: string
    placeholder?: string
}

const FormSelect:React.FC<PropsType> = (props) => {
    const {
        caption,
        placeholder,
    } = props

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    const customStyles = {
        control: () => ({
            border: '1px solid #DEDEDE',
            borderRadius: '4px',
            display: 'flex'
        })
    }


    return (
        <div className={s.select}>
            <div className={s.select__caption}>{caption}</div>
            <Select options={options} styles={customStyles}/>
        </div>
    );
};

export default FormSelect;