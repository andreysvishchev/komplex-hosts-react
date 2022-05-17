import React, {useState} from 'react';
import './App.css';
import Authorization from "./components/authorization/Authorization";
import Lk from "./components/lk/Lk";


function App() {

    const [auth, setAuth] = useState<boolean>(true)

    return (
        <div className="App">


            {auth ? <Lk/> :<Authorization/>}



        </div>
    );
}

export default App;
