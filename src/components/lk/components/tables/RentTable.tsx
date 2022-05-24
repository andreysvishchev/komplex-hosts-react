import React from 'react';
import s from './Table.module.scss'
import rentTable from './RentTable.module.scss'

type StateTye = {
    name: string
    spec?: string
    price: number
    amount: number
    sum: number
}

export const RentTable = () => {
    let state : StateTye [] = [
        {name: 'Аренда места', spec: 'Unit', price: 1500, amount: 2, sum: 3000},
        {name: 'Электропитание', spec: 'Watt', price: 150, amount: 200, sum: 30000},
        {name: 'Порт коммутатора', price: 1500, amount: 1, sum: 150},
    ]
    return (
        <div className={s.wrap}>
            <div className={`${s.captions} ${rentTable.captions}`}>
                <h6 className={rentTable.caption}>Наименование услуги</h6>
                <h6 className={rentTable.caption}>Цена</h6>
                <h6 className={rentTable.caption}>Кол-во</h6>
                <h6 className={rentTable.caption}>Сумма</h6>
            </div>
            {state.map((el, i) => {
                return (
                    <div className={`${s.row} ${rentTable.row}`} key={i}>
                        <div className={`${rentTable.col} ${rentTable.name}`}>{el.name} <span>{el.spec}</span></div>
                        <div className={`${rentTable.col} ${rentTable.price}`}>{el.price}</div>
                        <div className={rentTable.col}>{el.amount}</div>
                        <div className={`${rentTable.col} ${rentTable.sum}`}>{el.sum}</div>
                    </div>
                )
            })}
        </div>
    );
};