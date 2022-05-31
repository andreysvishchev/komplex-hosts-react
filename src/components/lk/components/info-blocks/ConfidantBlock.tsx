import React from 'react';
import ConfidantTable from "../tables/ConfidantTable";
import s from "./InfoBlock.module.scss";
import Search from "../search/Search";
import ContextMenu from "../contextMenu/ContextMenu";


const ConfidantBlock = () => {

    const callBack = () => {

    }

    return (
        <div className={s.wrap}>
            <div className={`${s.top} ${s.grid}`}>
                <div className={s.col}>
                    <h4 className={s.caption}>Доверенное лицо</h4>
                    <a href="#" className={s.link}>?</a>
                </div>
                <Search/>
                <ContextMenu callBack={callBack}/>
            </div>
            <ConfidantTable/>
            <button className={s.show}>Развернуть всех</button>

        </div>
    );
};

export default ConfidantBlock;