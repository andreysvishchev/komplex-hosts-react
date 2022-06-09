import React from 'react';
import s from "../../Form.module.scss";

type PropsType = {
    caption: string
    placeholder?: string
    type?: string
}

const FormInput: React.FC<PropsType> = (props) => {
    const {
        caption,
        placeholder,
        type,
    } = props

    return (
        <div className={s.input}>
            <div className={s.input__caption}>{caption}</div>
            <input type={type} className={s.input__field}/>
        </div>
    );
};

export default FormInput;