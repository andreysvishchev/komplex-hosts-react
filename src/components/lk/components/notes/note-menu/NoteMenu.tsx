import React from 'react';
import s from './NoteMenu.module.scss'

type NoteMenuPropsType = {
    open: boolean
    id: number
    callBack: (noteId: number) => void
}

const NoteMenu = (props: NoteMenuPropsType) => {

    const onClickHandler = () => {
        props.callBack(props.id)
    }

    return (
        <div className={props.open ? `${s.menu} ${s.isOpen}` : s.menu}>
            <button className={s.button}>Изменить</button>
            <button onClick={onClickHandler} className={s.button}>Удалить</button>
        </div>
    );
};

export default NoteMenu;