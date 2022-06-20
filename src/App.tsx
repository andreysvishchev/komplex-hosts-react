import React, {useState} from 'react';
import Auth from "./pages/authorization/Auth";
import Lk from "./pages/lk/Lk";


function App() {

    const [auth, setAuth] = useState<boolean>(false)

    return (
        <div className="App">


            {auth ? <Lk/> :<Auth/>}



        </div>
    );
}

export default App;
