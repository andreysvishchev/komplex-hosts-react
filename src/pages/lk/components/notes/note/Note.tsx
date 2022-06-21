import React, {memo} from "react";
import s from './Note.module.scss'
import {useDispatch} from "react-redux";
import {deleteNoteAC} from "../../../../../reducers/notesReducer";
import NoteMenu from "../../contextMenu/NoteMenu";

type NotePropsType = {
    id: string
    date: string
    caption: string
    important: boolean
}

export const Note: React.FC<NotePropsType> = memo((props) => {

    const {
        id,
        date,
        caption,
        important,
    } = props

    const dispatch = useDispatch()

    const deleteNote = () => {
        dispatch(deleteNoteAC(id))
    }

    return (
        <div data-note='style'
            className={s.item}>
            <div className={s.data}>{date}</div>
            <div className={important ? `${s.caption} ${s.important}` : s.caption}>{caption}</div>
            <NoteMenu
                callBack={deleteNote}
                date={date}
                text={caption}
                important={important}
                noteId={props.id}
            />
        </div>
    )
})

