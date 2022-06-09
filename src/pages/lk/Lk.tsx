import React from 'react';
import Nav from "./nav/Nav";
import Header from "./header/Header";
import Services from "./services/Services";
import s from './Lk.module.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Union from "./Union/Union";
import Notice from "./notifications/Notice";
import Support from "./support/Support";
import Docs from "./docs/Docs";
import Profile from "./profile/Profile";
import Faq from "./faq/Faq";

const Lk = () => {
    return (
        <BrowserRouter>
            <div className={s.main}>
            <Header/>
            <div className={s.inner}>
                <Nav/>
                <div className={s.content}>
                    <Routes>
                        <Route path="/services" element={<Services/>} />
                        <Route path="/union" element={<Union/>} />
                        <Route path="/notifications" element={<Notice/>} />
                        <Route path="/support" element={<Support/>} />
                        <Route path="/docs" element={<Docs/>} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/faq" element={<Faq/>} />
                    </Routes>
                </div>
            </div>
        </div>
        </BrowserRouter>
    );
};

export default Lk;