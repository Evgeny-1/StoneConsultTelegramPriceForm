import './App.css';
import './utilites.css';

import React, {useState} from "react";
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom';

import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [stone, setStone] = useState("None");
    const handleChangeStone = (event) => {
        setStone(event.target.value)
    }

    const [currency, setCurrency] = useState("None");
    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value)
    }

    const [portOfShipment, setPortOfShipment] = useState("None");
    const handleChangePortOfShipment = (event) => {
        setPortOfShipment(event.target.value)
    }

    const [pointOfDelivery, setPointOfDelivery] = useState("None");
    const handleChangePointOfDelivery = (event) => {
        setPointOfDelivery(event.target.value)
    }

    return (
        <div className={'container'}>
            <Header/>
            <form>
                <label><strong>Type of stone</strong></label>
                <select value={stone} onChange={handleChangeStone}>
                    <option value="None">None</option>
                    <option value="Granite">Granite</option>
                    <option value="Marble">Marble</option>
                    <option value="Labrador">Labrador</option>
                    <option value="Quartz">Quartz</option>
                    <option value="Quartzite">Quartzite</option>
                    <option value="Limestone">Limestone</option>
                    <option value="Travertine">Travertine</option>
                    <option value="Slate">Slate</option>
                    <option value="Sandstone">Sandstone</option>
                    <option value="Onyx">Onyx</option>
                    <option value="Basalt">Basalt</option>
                    <option value="Amethyst">Amethyst</option>
                    <option value="Agate">Agate</option>
                </select>
                <label><strong>Geometry(Thick mm)</strong></label>
                <InputForm placeholder="Thick, mm"/>
                <label><strong>Quantity of goods in m2</strong></label>
                <InputForm placeholder="Valume, m2"/>
                <label><strong>Factory price per m2</strong></label>
                <InputForm placeholder="Price"/>
                <label><strong>Currency</strong></label>
                <select value={currency} onChange={handleChangeCurrency}>
                    <option value="None">None</option>
                    <option value="$">$</option>
                    <option value="€">€</option>
                    <option value="₽">₽</option>
                </select>
                <label><strong>Port of shipment</strong></label>
                <select value={portOfShipment} onChange={handleChangePortOfShipment}>
                    <option value="None">None</option>
                    <option value="Xiamen">Xiamen</option>
                    <option value="Wuhan">Wuhan</option>
                    <option value="Mundra">Mundra</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Ho chi min">Ho chi min</option>
                    <option value="Carrara">Carrara</option>
                    <option value="Venezia">Venezia</option>
                    <option value="Alicante">Alicante</option>
                    <option value="Lisbon">Lisbon</option>
                    <option value="Izmir">Izmir</option>
                    <option value="Stambul">Stambul</option>
                    <option value="Vitoria">Vitoria</option>
                </select>
                <label><strong>Point of delivery</strong></label>
                <select value={pointOfDelivery} onChange={handleChangePointOfDelivery}>
                    <option value="None">None</option>
                    <option value="Vladikavkaz">Vladikavkaz</option>
                    <option value="Novorossiysk">Novorossiysk</option>
                    <option value="Saint-Petersburg">Saint-Petersburg</option>
                    <option value="Moscow">Moscow</option>
                </select>
            </form>

            {/*<Routes>*/}

            {/*  <Route index element={<ProductList />}/>*/}
            {/* <Route path={'form'} element={<Form />}/>*/}

            {/*</Routes>*/}
        </div>
    );
}

export default App;
