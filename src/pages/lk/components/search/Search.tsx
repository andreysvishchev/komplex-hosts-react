import React from 'react';
import s from './Search.module.scss'

const Search = () => {
    return (
        <label className={s.wrap}>
            <input type="text" className={s.input} placeholder="Поиск"/>
            <button className={s.button}/>
        </label>
    );
};

export default Search;