import React from 'react';
import s from "../../Form.module.scss";
import Select from "react-select";

type PropsType = {
    caption: string
    placeholder?: string
}

const FormSelect: React.FC<PropsType> = (props) => {
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
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
        }),
        valueContainer: () => ({
            padding: '8px 16px',
            display: 'flex',
        }),
        indicatorsContainer: () => ({
            border: 'none',
        }),
        input: () => ({
            margin: 0,
            padding: 0
        }),
        placeholder: () => ({
            color: '#818181'
        }),
        menu: (provided: any)=> ({
      ...provided,
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',

            border: 'none',
            borderRadius: '0px 0px 4px 4px',
        }),



    }


    return (
        <div className={s.select}>
            <div className={s.select__caption}>{caption}</div>
            <Select options={options} styles={customStyles} placeholder={placeholder} />
        </div>
    );
};

export default FormSelect;