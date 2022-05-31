import React, {MutableRefObject, useState} from 'react';
import s from './ContextMenu.module.scss'
import {useOnClickOutside} from "../../../../function/useOnClickOutside";
import {useDispatch} from "react-redux";
import {deleteAllConfidant} from "../../../../reducers/confidantReducer";


type ContextMenuPropsType = {
    callBack: () => void
    notBtn?: boolean
}

const ContextMenu = (props: ContextMenuPropsType) => {
    const [toggle, setToggle] = useState(false);

    const myRef = React.useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useDispatch()

    const onClickHandler = () => {
        props.callBack()
    }
    const deleteAll = () => {
        dispatch(deleteAllConfidant())
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
                <button onClick={deleteAll} className={s.button}>Удалить все</button>
            </div>
        </div>
    );
};

export default ContextMenu;