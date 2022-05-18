import React, {useRef, useState} from 'react';
import s from './Notes.module.scss'
import {Note} from "./note/Note";


export type StateType = {
    id: number
    data: string
    caption: string
    important: boolean
    menuIsOpen: boolean
}

const Notes = () => {

    let state: StateType[] = [
        {id: 1, data: '27.10.2021', caption: 'Нужно не забыть заплатить за сервер!!!', important: true, menuIsOpen: false},
        {id: 2, data: '17.09.2021', caption: 'Пополнить счёт', important: false, menuIsOpen: false},
        {id: 3, data: '27.10.2021', caption: 'Нужно не забыть заплатить за сервер!!!', important: false, menuIsOpen: false},
    ]

    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <h4 className={s.caption}>Заметки</h4>
                <a href="#" className={s.link}>?</a>
            </div>
            <div className={s.items}>
                {state.map(note => {
                    return (
                        <Note note={note} key={note.id}/>
                    )
                })}
            </div>
        </div>
    );
};


export default Notes;