import './App.css';
import './utilites.css';

import React, {useState} from "react";
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";

function App() {

    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className={'container'}>
            <Header/>
            <InputForm />
        </div>
    );
}

export default App;
