import React from 'react';
import s from '../Lk.module.scss'
import UnionTable from "../components/tables/UnionTable";

const Union = () => {
    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <div className={s.col}>
                    <h4 className={s.caption}>Все платежи</h4>
                    <button className={s.tooltip}>?</button>
                </div>
                <button className={s.button}>Сформировать акт сверки</button>
            </div>
            <UnionTable/>
            <button className={s.show}>Развернуть все платежи</button>
        </div>
    );
};

export default Union;