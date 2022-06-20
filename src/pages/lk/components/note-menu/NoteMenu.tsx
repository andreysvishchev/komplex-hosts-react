import React, {MutableRefObject, useState} from 'react';
import {useOnClickOutside} from "../../../../function/useOnClickOutside";
import s from "../table-menu/TableMenu.module.scss";

type PropsType = {
    callBack: ()=> void
}

const NoteMenu = (props: PropsType) => {
    const [open, setOpen] = useState(false);
    const ref = React.useRef() as MutableRefObject<HTMLDivElement>



    const onClickHandler = () => {

    }

    useOnClickOutside(ref, () => setOpen(false))

    return (
        <div className={s.wrap} ref={ref}>
            <button className={open ? `${s.dots} ${s.isOpen} ${s.blue}` : `${s.dots} ${s.blue}`} onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div className={open ? `${s.menu} ${s.isOpen}` : s.menu}>
                <button  className={s.button}>Изменить</button>
                <button onClick={onClickHandler} className={s.button}>Удалить</button>
            </div>

        </div>

    );
};

export default NoteMenu;