import React from 'react';
import s from './Table.module.scss';
import confidantTable from './ConfidantTable.module.scss'

type ConfidantTableType = {
    id: number
    name: string
    passport: string
    tel: string
}

const ConfidantTable = () => {

    let table: ConfidantTableType[] = [
        {id: 1, name: 'Иванов Иван Иванович', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
        {id: 2, name: 'Иванов Иван Иванович', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
        {id: 3, name: 'Иванов Иван Иванович', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
        {id: 4, name: 'Иванов Иван Иванович', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
    ]

    return (
        <div>
            <div className={s.wrap}>
                <div className={`${s.captions} ${confidantTable.captions}`}>
                    <h6 className={confidantTable.caption}>ФИО</h6>
                    <h6 className={confidantTable.caption}>Серия и номер паспорта</h6>
                    <h6 className={confidantTable.caption}>Телефон</h6>
                </div>
                {table.length !== 0 ?
                    table.map(el => {
                        return (
                            <div className={`${s.row} ${confidantTable.row}`} key={el.id}>
                                <div className={confidantTable.col}>{el.name}</div>
                                <div className={confidantTable.col}>{el.passport}</div>
                                <div className={confidantTable.col}>{el.tel}</div>
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