import React from 'react';
import s from './Table.module.scss'

const Table = () => {
    let state = [
        {name: 'Аренда места', price: 1500, amount: 2, sum: 3000},
        {name: 'Электропитание', price: 150, amount: 200, sum: 30000},
        {name: 'Порт коммутатора', price: 1500, amount: 1, sum: 150},
    ]
    return (
        <div className={s.wrap}>
            <div className={s.captions}>
                <h6 className={s.caption}>Наименование услуги</h6>
                <h6 className={s.caption}>Цена</h6>
                <h6 className={s.caption}>Кол-во</h6>
                <h6 className={s.caption}>Сумма</h6>
            </div>
            {state.map((el, i) => {
                return (
                    <div className={s.row} key={i}>
                        <div className={s.column}>{el.name}</div>
                        <div className={`${s.column} ${s.price}`}>{el.price}</div>
                        <div className={s.column}>{el.amount}</div>
                        <div className={`${s.column} ${s.sum}`}>{el.sum}</div>
                    </div>
                )
            })}

        </div>

    );
};

export default Table;