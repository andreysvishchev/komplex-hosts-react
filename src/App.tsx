import React, {useState} from 'react';
import Authorization from "./pages/authorization/Authorization";
import Lk from "./pages/lk/Lk";


function App() {

    const [auth, setAuth] = useState<boolean>(true)

    return (
        <div className="App">


            {auth ? <Lk/> :<Authorization/>}



        </div>
    );
}

export default App;
