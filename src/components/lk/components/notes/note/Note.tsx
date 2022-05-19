import React, {useState} from "react";
import s from './Note.module.scss'
import NoteMenu from "../note-menu/NoteMenu";
import {StateType} from "../Notes";

type PropsType = {
    note: StateType
}

export const Note = (props: PropsType) => {

    let [open, setOpen] = useState<boolean>(false)

    const openMenuHandler = () => {
        setOpen(!open)
    }
    return (
        <div
            className={open ? `${s.active} ${s.item}` : s.item}>
            <div className={s.data}>{props.note.data}</div>
            <div className={props.note.important ? `${s.caption} ${s.important}` : s.caption}>{props.note.caption}</div>
            <button className={s.button} onClick={openMenuHandler}>
                <span/>
                <span/>
                <span/>
            </button>
            <NoteMenu open={open}/>
        </div>
    )
}