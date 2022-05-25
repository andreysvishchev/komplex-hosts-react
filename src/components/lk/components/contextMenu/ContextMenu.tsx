import React, {MutableRefObject, useState} from 'react';
import s from './ContextMenu.module.scss'
import {useOnClickOutside} from "../../../../function/useOnClickOutside";

type ContextMenuPropsType = {
    callBack: () => void
    notBtn?: boolean
}

const ContextMenu = (props: ContextMenuPropsType) => {
    const [toggle, setToggle] = useState(false);

    const myRef = React.useRef() as MutableRefObject<HTMLDivElement>

    const onClickHandler = () => {
        props.callBack()
    }

    useOnClickOutside(myRef, () => setToggle(false))

    return (
        <div className={s.wrap} ref={myRef}>
            <button className={toggle ? `${s.burger} ${s.isOpen}` : s.burger}
                    onClick={() => setToggle(!toggle)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div className={toggle ? `${s.menu} ${s.isOpen}` : s.menu}>
                <button className={s.button}>Добавить</button>
                <button onClick={onClickHandler} className={s.button}>Удалить все</button>
            </div>
        </div>
    );
};

export default ContextMenu;