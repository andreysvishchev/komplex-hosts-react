import React from 'react';
import Aside from "./aside/Aside";
import Entrance from "./entrance/Entrance";
import s from './Auth.module.scss'

const Auth = () => {
    return (
        <div className={s.wrap}>
            <Aside/>
            <Entrance/>
        </div>
    );
};

export default Auth;