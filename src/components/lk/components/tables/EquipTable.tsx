import React, {useState} from 'react';
import equipTable from './EquipTable.module.scss'
import s from './Table.module.scss';

type EquipTableType = {
    id: number
    serialNumber: number
    name: string
    comment: string
}

const EquipTable = () => {
    let table: EquipTableType[] = [
        {id: 1, serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
        {id: 2, serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
        {id: 3, serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
        {id: 4, serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
    ]

    return (

        <div className={s.wrap}>
            <div className={`${s.captions} ${equipTable.captions}`}>
                <h6 className={equipTable.caption}>Серийный номер</h6>
                <h6 className={equipTable.caption}>Наименование оборудования</h6>
                <h6 className={equipTable.caption}>Комментарий</h6>
            </div>
            {table.length !== 0 ?
                table.map(el => {
                    return (
                        <div className={`${s.row} ${equipTable.row}`} key={el.id}>
                            <div className={equipTable.col}>{el.serialNumber}</div>
                            <div className={equipTable.col}>{el.name}</div>
                            <div className={equipTable.col}>{el.comment}</div>
                        </div>
                    )
                })
                : <div className={s.empty}>В таблице пока нет записей</div>
            }
        </div>
    );
};

export default EquipTable;