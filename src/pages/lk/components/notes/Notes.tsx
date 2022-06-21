import React from 'react';
import s from './Notes.module.scss'
import {Note} from "./note/Note";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../../store/store";
import {deleteAllNotes, NoteType} from "../../../../reducers/notesReducer";
import ConfidantMenu from "../contextMenu/ConfidantMenu";
import NotesMenu from "../contextMenu/NotesMenu";
import NoteModal from "../../../modals/NoteModal";


const Notes = () => {
    const [openNoteModal, setOpenNoteModal] = React.useState(false);
    const openNoteModalHandler = () => {
        setOpenNoteModal(true)
    }
    const notes = useSelector<RootStateType, Array<NoteType>>(state => state.notes)

    return (
        <div className={s.wrap}>
            <div className={notes.length === 0 ? `${s.top} ${s.zero}` : s.top}>
                <h4 className={s.caption}>Заметки</h4>
                <a href="#" className={s.link}>?</a>
                <NotesMenu notBtn={notes.length !== 0} />
            </div>
            <div className={s.items}>
                {notes.length !== 0 ?

                    notes.map(note => {
                        return (
                            <Note key={note.id}
                                  id={note.id}
                                  date={note.date}
                                  caption={note.caption}
                                  important={note.important}
                            />
                        )
                    }) :
                    <div>
                        <h6 className={s.empty}>Пока нет записей</h6>
                        <button onClick={openNoteModalHandler} className={s.addNote}>Добавить +</button>
                    </div>
                }
            </div>
            <NoteModal
                date={new Date().toLocaleDateString()}
                open={openNoteModal}
                setOpen={setOpenNoteModal}
                text={''}
                important={false}/>
        </div>
    );
};


export default Notes;