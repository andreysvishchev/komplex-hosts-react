import React from 'react';
import s from './Notes.module.scss'
import {Note} from "./note/Note";
import {useSelector} from "react-redux";
import {RootStateType} from "../../../../store/store";
import {NoteType} from "../../../../reducers/notesReducer";

const Notes = () => {

    const notes = useSelector<RootStateType, Array<NoteType>>(state=> state.notes )

    return (
        <div className={s.wrap}>
            <div className={notes.length=== 0 ? `${s.top} ${s.zero}` : s.top}>
                <h4 className={s.caption}>Заметки</h4>
                <a href="#" className={s.link}>?</a>
            </div>
            <div className={s.items}>
                {notes.map(note => {
                    return (
                        <Note key={note.id}
                              id={note.id}
                              data={note.data}
                              caption={note.caption}
                              menuIsOpen={note.menuIsOpen}
                              important={note.important} />
                    )
                })}
            </div>
        </div>
    );
};


export default Notes;