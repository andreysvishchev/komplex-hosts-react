import React, {MutableRefObject, useState} from 'react';
import s from './NoteMenu.module.scss'

import {useOnClickOutside} from "../../../../../function/useOnClickOutside";

type NoteMenuPropsType = {

    callBack: () => void
}

const NoteMenu = (props: NoteMenuPropsType) => {

    const [open, setOpen] = useState(false);

    const ref = React.useRef() as MutableRefObject<HTMLDivElement>

    const onClickHandler = () => {
        props.callBack()
    }

    useOnClickOutside(ref, () => setOpen(false))

    return (
        <div className={s.wrap} ref={ref}>
            <button  className={open ? `${s.burger} ${s.isOpen}` : s.burger} onClick={()=>setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div  className={open ? `${s.menu} ${s.isOpen}` : s.menu}>
                <button className={s.button}>Изменить</button>
                <button onClick={onClickHandler} className={s.button}>Удалить</button>
            </div>
        </div>

    );
};

export default NoteMenu;



