import React from 'react';
import s from './EquipBlock.module.scss'
import Search from "../search/Search";
import EquipTable from "../tables/EquipTable";


const EquipBlock = () => {

    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <h4 className={s.caption}>Оборудование</h4>
                <a href="#" className={s.link}>?</a>
                <Search/>
            </div>
            <EquipTable/>
            <button className={s.show}>Развернуть все оборудование</button>

        </div>
    );
};

export default EquipBlock;