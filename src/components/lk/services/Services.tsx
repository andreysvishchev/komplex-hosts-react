import React from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import s from './Services.module.scss'
import AllServices from "./all-services/AllServices";
import PlaceRental from "./place-rental/PlaceRental";

const Services = () => {



    return (

        <Tabs selectedTabClassName={s.active}>
            <TabList className={s.list} >
                <Tab  className={s.button} >Все услуги</Tab>
                <Tab className={s.button}>Аренда места</Tab>
                <Tab className={s.button}>Аренда стойки </Tab>
                <Tab className={s.button}>Аренда сервера</Tab>
                <Tab className={s.button}>Все услуги</Tab>
                <Tab className={s.button}>Архив услуг</Tab>
            </TabList>

            <TabPanel>
                <AllServices/>
            </TabPanel>
            <TabPanel>
                <PlaceRental/>
            </TabPanel>
        </Tabs>

    );
};

export default Services;