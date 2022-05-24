import React, {memo, MouseEventHandler, useCallback, useEffect, useRef, useState} from "react";
import s from './Note.module.scss'
import NoteMenu from "../note-menu/NoteMenu";
import {useDispatch} from "react-redux";
import {closeMenuAC, deleteNoteAC, toggleMenuAC} from "../../../../../reducers/notesReducer";

type NotePropsType = {
    id: number
    data: string
    caption: string

    menuIsOpen: boolean
    important: boolean

}

export const Note: React.FC<NotePropsType> = memo((props) => {

    const {
        id,
        data,
        caption,
        menuIsOpen,
        important
    } = props

    const dispatch = useDispatch()

    const toggleMenuHandler = (noteId: number, open: boolean, e: React.SyntheticEvent) => {
        e.stopPropagation()
        dispatch(toggleMenuAC(noteId, open))
    }

    const deleteNote = (noteId: number) => {
        dispatch(deleteNoteAC(noteId))
    }

    window.onclick = () => {
        dispatch(closeMenuAC())
    }

    return (
        <div
            className={menuIsOpen ? `${s.active} ${s.item}` : s.item}>
            <div className={s.data}>{data}</div>
            <div className={important ? `${s.caption} ${s.important}` : s.caption}>{caption}</div>
            <button className={menuIsOpen ? `${s.active} ${s.button}` : s.button}
                    onClick={(e) => toggleMenuHandler(id, menuIsOpen, e)}>
                <span/>
                <span/>
                <span/>
            </button>
            <NoteMenu id={id} open={menuIsOpen} callBack={() => deleteNote(id)}/>
        </div>
    )
})