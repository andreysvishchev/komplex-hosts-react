import React, {memo, MouseEventHandler, useCallback, useEffect, useRef, useState} from "react";
import s from './Note.module.scss'
import NoteMenu from "../note-menu/NoteMenu";
import {useDispatch} from "react-redux";
import {deleteNoteAC} from "../../../../../reducers/notesReducer";
import ContextMenu from "../../contextMenu/ContextMenu";

type NotePropsType = {
    id: number
    data: string
    caption: string
    important: boolean
}

export const Note: React.FC<NotePropsType> = memo((props) => {

    const {
        id,
        data,
        caption,
        important
    } = props

    const dispatch = useDispatch()

    const deleteNote = () => {
        dispatch(deleteNoteAC(id))
    }

    return (
        <div
            className={s.item}>
            <div className={s.data}>{data}</div>
            <div className={important ? `${s.caption} ${s.important}` : s.caption}>{caption}</div>
            <NoteMenu callBack={deleteNote}/>
        </div>
    )
})
