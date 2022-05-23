import React from 'react';
import s from "./Table.module.scss";
import ipTable from "./IpTable.module.scss";

type StateType = {
    id: number
    ip: string
    mask: string
    gateway: string
}

const IpTable = () => {
    let state: StateType[] = [
        {id: 1, ip: '192.168.5.0/29', mask: '255.255.255.248', gateway: '192.168.5.200'},
    ]

    return (
        <div className={s.wrap}>
            <div className={`${s.captions} ${ipTable.captions}`}>
                <h6 className={ipTable.caption}>IP-адрес</h6>
                <h6 className={ipTable.caption}>Маска</h6>
                <h6 className={ipTable.caption}>Шлюз</h6>
            </div>
            { state.length !== 0 ?
                state.map((el, i) => {
                return (
                    <div className={`${s.row} ${ipTable.row}`} key={el.id}>
                        <div className={ipTable.col}>{el.ip}</div>
                        <div className={ipTable.col}>{el.mask}</div>
                        <div className={ipTable.col}>{el.gateway}</div>
                    </div>
                )
            }) : <div className={s.empty}>В таблице пока нет записей</div>
            }
        </div>
    );
};

export default IpTable;