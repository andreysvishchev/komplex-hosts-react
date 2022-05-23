import React from 'react';
import s from './Block.module.scss'
import Search from "../search/Search";
import ConfidantTable from "../tables/ConfidantTable";
import IpTable from "../tables/IpTable";


const IpBlock = () => {
    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <h4 className={s.caption}>IP-адреса</h4>
                <a href="#" className={s.link}>?</a>
            </div>
            <IpTable/>


        </div>
    );
};

export default IpBlock;