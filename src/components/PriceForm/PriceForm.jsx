import React, {useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import {variables} from "../../hooks/Variables";
import {useCallback, useEffect} from "react";

const PriceForm = (props) => {

    const {tg, userId, userFirstName, userLastName, userUserName} = useTelegram();

    const [stone, setStone] = useState([]);
    const [stoneType, setStoneType] = useState('None');
    const handleChangeStone = (event) => {
        setStoneType(event.target.value)
    }

    const [stoneName, setStoneName] = useState('');
    const handleChangeStoneName = (event) => {
        setStoneName(event.target.value)
    }

    const [thick, setThick] = useState('');
    const handleChangeThick = (e) => {
        const result = e.target.value.replace(/\D/g, '');
        setThick(result)
    }

    const [finishing, setFinishing] = useState([]);
    const [finishingType, setFinishingType] = useState("None");
    const handleChangeFinishing = (event) => {
        setFinishingType(event.target.value)
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

    const [currency, setCurrency] = useState([]);
    const [currencyType, setCurrencyType] = useState("None");
    const handleChangeCurrency = (event) => {
        setCurrencyType(event.target.value)
    }

    const [portOfShipment, setPortOfShipment] = useState([]);
    const [portOfShipmentType, setPortOfShipmentType] = useState("None");
    const handleChangePortOfShipment = (event) => {
        setPortOfShipmentType(event.target.value)
    }

    const [portOfDelivery, setPortOfDelivery] = useState([]);
    const [portOfDeliveryType, setPortOfDeliveryType] = useState("None");
    const handleChangePointOfDelivery = (event) => {
        setPortOfDeliveryType(event.target.value)
    }

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'OFFER'
        })
    }, [])

    useEffect(() => {
        if(stoneType === "None"
            || !stoneName
            || !thick
            || !volume
            || finishingType === "None"
            || !price
            || currencyType === "None"
            || portOfShipmentType === "None"
            || portOfDeliveryType === "None") {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [stoneType, stoneName, thick, volume, finishingType, price, currencyType, portOfShipmentType, portOfDeliveryType])

    useEffect(() => {
        fetch(variables.API_REMOTE_URL + 'Stone')
            .then(data => data.json())
            .then(data => setStone(data))
    }, []);

    useEffect(()=>{
        fetch(variables.API_REMOTE_URL + 'Finishing')
            .then(response => response.json())
            .then(data => setFinishing(data))
    }, []);

    useEffect(()=>{
        fetch(variables.API_REMOTE_URL + 'Currency')
            .then(data => data.json())
            .then(data => setCurrency(data))
    }, []);

    useEffect(()=>{
        fetch(variables.API_REMOTE_URL + 'PortOfShipment')
            .then(data => data.json())
            .then(data => setPortOfShipment(data))
    }, []);

    useEffect(()=>{
        fetch(variables.API_REMOTE_URL + 'PortOfDelivery')
            .then(data => data.json())
            .then(data => setPortOfDelivery(data))
    }, []);

    const onSendData = useCallback(() => {
        fetch(variables.API_REMOTE_URL+ 'CommercialRequest', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TelegramUserId:userId,
                TelegramUserFirstName:userFirstName,
                TelegramUserLastName:userLastName,
                TelegramUserUserName:userUserName,
                StoneType:stoneType,
                StoneName:stoneName,
                GeometryThick:thick,
                FinishingOfStone:finishingType,
                QuantityVolume:volume,
                FactoryPrice:price,
                CurrencyCharCode:currencyType,
                PortOfShipment:portOfShipmentType,
                PortOfDelivery:portOfDeliveryType
            })
        }).then(result => result.json())
            .then((result) => {
                tg.close();
            })
    }, [userId, userFirstName, userLastName, userUserName, stoneType, stoneName, thick, finishingType, volume, price, currencyType, portOfShipmentType, portOfDeliveryType])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    return (
        <div>
            <form>
                <label><strong>Тип камня</strong></label>
                <select onChange={handleChangeStone} value={stoneType}>
                    {stone?.map((opts, i) => <option>{opts.stoneType}</option>)}
                </select>
                <label><strong>Название камня</strong></label>
                <input
                    type="text"
                    placeholder={'Название'}
                    value={stoneName}
                    onChange={handleChangeStoneName}
                />
                <label><strong>Геометрия(Толщина, мм)</strong></label>
                <input
                    type="text"
                    placeholder={'Толщина, мм'}
                    value={thick}
                    onChange={handleChangeThick}
                />
                <label><strong>Кол-во продукции из камня, м2</strong></label>
                <input
                    type="text"
                    placeholder={'Кол-во, м2'}
                    value={volume}
                    onChange={handleChangeVolume}
                />
                <label><strong>Тип обработки камня</strong></label>
                <select onChange={handleChangeFinishing} value={finishingType}>
                    {
                        finishing?.map((opts, i) => <option>{opts.finishingName}</option>)
                    }
                </select>
                <label><strong>Цена завода изготовителя, м2</strong></label>
                <input
                    type="text"
                    placeholder={'Цена, м2'}
                    value={price}
                    onChange={handleChangePrice}
                />
                <label><strong>Валюта</strong></label>
                <select value={currencyType} onChange={handleChangeCurrency}>
                    {
                        currency?.map((opts, i) => <option>{opts.charCode}</option>)
                    }
                </select>
                <label><strong>Порт отгрузки</strong></label>
                <select value={portOfShipmentType} onChange={handleChangePortOfShipment}>
                    {
                        portOfShipment?.map((opts, i) => <option>{opts.portOfShipmentName}</option>)
                    }
                </select>
                <label><strong>Место доставки</strong></label>
                <select value={portOfDeliveryType} onChange={handleChangePointOfDelivery}>
                    {
                        portOfDelivery?.map((opts, i) => <option>{opts.portOfDeliveryName}</option>)
                    }
                </select>
            </form>
        </div>
    );
};

export default PriceForm;
