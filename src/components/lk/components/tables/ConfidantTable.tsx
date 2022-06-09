import React from 'react';
import s from './Table.module.scss';
import NoteMenu from "../notes/note-menu/NoteMenu";
import {useSelector} from "react-redux";
import {RootStateType} from "../../../../store/store";
import {ConfidantType} from "../../../../reducers/confidantReducer";



const ConfidantTable = () => {


    const state = useSelector<RootStateType, ConfidantType[]>(state => state.confidant)

    const deleteItem = () => {

    }

    return (
        <div>
            <div className={s.wrap}>
                <div className={`${s.captions} ${s.confidant}`}>
                    <h6 className={`${s.caption} ${s.confidant}`}>ФИО</h6>
                    <h6 className={`${s.caption} ${s.confidant}`}>Серия и номер паспорта</h6>
                    <h6 className={`${s.caption} ${s.confidant}`}>Телефон</h6>
                </div>
                {state.length !== 0 ?
                    state.map(el => {
                        return (
                            <div className={`${s.row} ${s.confidant}`} key={el.id}>
                                <div className={s.col}>{el.name}</div>
                                <div className={s.col}>{el.passport}</div>
                                <div className={s.col}>{el.tel}</div>
                                <NoteMenu callBack={deleteItem}/>
                            </div>
                        )
                    })
                    : <div className={s.empty}>В таблице пока нет записей</div>
                }
            </div>
        </div>
    );
};

export default ConfidantTable;