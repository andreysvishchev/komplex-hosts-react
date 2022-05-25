import React, {useEffect, useRef} from 'react';
import s from './Notes.module.scss'
import {Note} from "./note/Note";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../../store/store";
import {closeMenuAC, NoteType} from "../../../../reducers/notesReducer";
import NoteMenu from "./note-menu/NoteMenu";
import ContextMenu from "../contextMenu/ContextMenu";


const Notes = () => {

    const notes = useSelector<RootStateType, Array<NoteType>>(state => state.notes)

    const deleteAll = () => {

    }

    return (
        <div className={s.wrap}>
            <div className={notes.length === 0 ? `${s.top} ${s.zero}` : s.top}>
                <h4 className={s.caption}>Заметки</h4>
                <a href="#" className={s.link}>?</a>
                <ContextMenu callBack={deleteAll} notBtn={notes.length !== 0}/>
            </div>
            <div className={s.items}>
                {notes.length !== 0 ?
                    notes.map(note => {
                        return (
                            <Note key={note.id}
                                  id={note.id}
                                  data={note.data}
                                  caption={note.caption}
                                  important={note.important}/>
                        )
                    }) :
                    <div>
                        <h6 className={s.empty}>Пока нет записей</h6>
                        <button className={s.addNote}>Добавить +</button>
                    </div>
                }
            </div>
        </div>
    );
};


export default Notes;