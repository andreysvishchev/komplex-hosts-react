import React from 'react';
import Table from "../table/Table";
import s from './InfoBlock.module.scss'

const InfoBlock = () => {
    let state = [
        {title: 'Аренда места', number: '253/893.156',},
        {title: 'Аренда места', number: '253/893.156',},
        {title: 'Аренда места', number: '253/893.156',},
        {title: 'Аренда места', number: '253/893.156',},
        {title: 'Аренда места', number: '253/893.156',},
    ]
    return (
        <>
            {state.map(el => {
                return (
                    <div className={s.wrap}>
                        <span className={s.error}>Услуга заблокирована</span>
                        <div className={s.top}>
                            <h4 className={s.caption}>{el.title}</h4>
                            <span className={s.number}>{el.number}</span>
                            <a href="#" className={s.link}>?</a>
                        </div>
                        <Table/>
                        <div className={s.bot}>
                            <div className={s.data}>
                                <span className={s.data__caption}>Дата подключения:</span>
                                <strong className={s.data__num}>21.05.2017</strong>
                            </div>
                            <div className={s.price}>
                                <span className={s.price__caption}>Итого:</span>
                                <strong className={s.price__sum}>3 300 ₽</strong>
                            </div>
                        </div>
                        <a href="#" className={s.more}>Подробнее</a>
                    </div>
                )
            })}
        </>
    );
};

export default InfoBlock;
