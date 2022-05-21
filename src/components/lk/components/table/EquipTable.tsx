import React, {useState} from 'react';

type TableType = {
    serialNumber: number
    name: string
    comment: string
}

const EquipTable = () => {
    let [table, setTable] = useState<TableType[]>([
        {serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
        {serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
        {serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
        {serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
    ])

    return (

        <div className="equip-table table">
            <div className="equip-table__captions table__captions">
                <h6 className="equip-table__caption table__caption">Серийный номер</h6>
                <h6 className="equip-table__caption table__caption">Наименование оборудования</h6>
                <h6 className="equip-table__caption table__caption">Комментарий</h6>
            </div>
            {
                table.map(el => {
                    return (
                        <div className="equip-table__row table__row">
                            <div className="equip-table__column table__col">{el.serialNumber}</div>
                            <div className="equip-table__column table__col">{el.name}</div>
                            <div className="equip-table__column table__col comment">{el.comment}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default EquipTable;