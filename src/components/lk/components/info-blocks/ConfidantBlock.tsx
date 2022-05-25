import React from 'react';
import ConfidantTable from "../tables/ConfidantTable";
import s from "./EquipBlock.module.scss";
import Search from "../search/Search";
import EquipTable from "../tables/EquipTable";
import ContextMenu from "../contextMenu/ContextMenu";


const ConfidantBlock = () => {

    const callBack = () => {

    }

    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <h4 className={s.caption}>Доверенное лицо</h4>
                <a href="#" className={s.link}>?</a>
                <Search/>
                <ContextMenu callBack={callBack}/>
            </div>
            <ConfidantTable/>
            <button className={s.show}>Развернуть всех</button>

        </div>
    );
};

export default ConfidantBlock;