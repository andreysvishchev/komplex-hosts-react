import React, {useState} from 'react';
import s from "../../Form.module.scss";

type PropsType = {
    caption: string
    placeholder?: string
    type?: string
    style?: any
    password?: boolean
}

const FormInput: React.FC<PropsType> = (props) => {

    const {caption, placeholder, type, style, password,} = props

    const [hidden, setHidden] = useState<boolean>(true)

    const togglePassword = () => {
        setHidden(!hidden)
    }

    return (

        password
            ?
            <div className={s.input} style={style}>
                <div className={s.input__caption}>{caption}</div>
                <label className={s.input__password}>
                    <span onClick={togglePassword}
                          className={hidden ? `${s.input__icon} ${s.hidden}` : s.input__icon}></span>
                    <input type={hidden ? 'password' : 'text'} className={s.input__field} placeholder={placeholder}/>
                </label>
            </div>
            :
            <div className={s.input} style={style}>
                <div className={s.input__caption}>{caption}</div>
                <input type={type} className={s.input__field} placeholder={placeholder}/>
            </div>

    )
        ;
};

export default FormInput;