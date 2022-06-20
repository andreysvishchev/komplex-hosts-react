import React, {useState} from 'react';
import Auth from "./pages/authorization/Auth";
import Lk from "./pages/lk/Lk";
import {useAppSelector} from "./store/store";


function App() {

    const auth = useAppSelector<boolean>(state => state.auth.isInitialized)

    return (
        <div className="App">


            {auth ? <Lk/> :<Auth/>}



        </div>
    );
}

export default App;
