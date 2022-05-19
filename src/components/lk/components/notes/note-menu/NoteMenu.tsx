import React from 'react';
import s from './NoteMenu.module.scss'

type NoteMenuPropsType = {
open: boolean
}

const NoteMenu = (props: NoteMenuPropsType) => {
    return (
        <div className={props.open ? `${s.menu} ${s.isOpen}` : s.menu}>
            <button className={s.button}>Изменить</button>
            <button className={s.button}>Удалить</button>
        </div>
    );
};

export default NoteMenu;