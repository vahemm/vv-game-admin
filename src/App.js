import React from 'react';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Content} from "./components/contents/Content";
import "./App.css"

function App() {
    return (<div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Content/>
        </div>

    );
}

export default App;
