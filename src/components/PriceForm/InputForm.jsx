import React from 'react';
import { useCallback, useEffect, useState } from "react";
import {useTelegram} from "../../hooks/useTelegram";

const InputForm = (props) => {

    const {tg} = useTelegram();

    const [stone, setStone] = useState("None");
    const handleChangeStone = (event) => {
        setStone(event.target.value)
    }

    const [thick, setThick] = useState('');
    const handleChangeThick = (e) => {
        const result = e.target.value.replace(/\D/g, '');
        setThick(result)
    }

    const [volume, setVolume] = useState('');
    const handleChangeVolume = (e) => {
        const result = e.target.value.replace(/\D/g, '');
        setVolume(result)
    }

    const [price, setPrice] = useState('');
    const handleChangePrice = (e) => {
        const result = e.target.value.replace(/\D/g, '');
        setPrice(result)
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

    {/* WORK WITH MAIN BUTTON ------> START */}
    // useEffect(() => {
    //     tg.onEvent('mainButtonClicked', onSendData)
    //     return () => {
    //         tg.offEvent('mainButtonClicked', onSendData)
    //     }
    // }, [onSendData])

    useEffect(() => {
        if(stone === "None"
            || !thick
            || !volume
            || !price
            || currency === "None"
            || portOfShipment === "None"
            || pointOfDelivery === "None") {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [stone, thick, volume, price, currency, portOfShipment, pointOfDelivery])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Calculate'
        })
    }, [])
    {/* WORK WITH MAIN BUTTON ------> END */}

    {/* SEND JSON FILE ON SERVER APP ------> START */}
    // const onSendData = useCallback(() => {
    //     const data = {
    //         stone,
    //         currency,
    //         portOfShipment,
    //         pointOfDelivery
    //     }
    //     tg.sendData(JSON.stringify(data));
    // }, [stone, currency, portOfShipment, pointOfDelivery])
    {/* SEND JSON FILE ON SERVER APP ------> START */}

    return (
        <div>
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
                <input
                    type="number"
                    placeholder={'Thick, mm'}
                    value={thick}
                    onChange={handleChangeThick}
                />
                <label><strong>Quantity of goods in m2</strong></label>
                <input
                    type="number"
                    placeholder={'Volume, m2'}
                    value={volume}
                    onChange={handleChangeVolume}
                />
                <label><strong>Factory price per m2</strong></label>
                <input
                    type="number"
                    placeholder={'Price'}
                    value={price}
                    onChange={handleChangePrice}
                />
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
        </div>
    );
};

export default InputForm;