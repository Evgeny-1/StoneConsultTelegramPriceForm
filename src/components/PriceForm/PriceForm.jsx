import React, {useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import {variables} from "../../hooks/Variables";
import {useCallback, useEffect} from "react";

const PriceForm = (props) => {

    const {tg, queryId, onClose} = useTelegram();

    const [telegramQueryId, setTelegramQueryId] = useState(queryId)

    const [stone, setStone] = useState([]);
    const [stoneType, setStoneType] = useState("");
    const handleChangeStone = (event) => {
        setStoneType(event.target.value)
    }

    const [stoneName, setStoneName] = useState("");
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

    // useEffect(() => {
    //     if(stoneType === "None"
    //         || !stoneName
    //         || !thick
    //         || !volume
    //         || finishingType === "None"
    //         || !price
    //         || currencyType === "None"
    //         || portOfShipmentType === "None"
    //         || portOfDeliveryType === "None") {
    //         tg.MainButton.hide();
    //     } else {
    //         tg.MainButton.show();
    //     }
    // }, [stoneType, stoneName, thick, volume, finishingType, price, currencyType, portOfShipmentType, portOfDeliveryType])

    useEffect(() => {
        if(
            !stoneName) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [stoneType, stoneName, thick, volume, finishingType, price, currencyType, portOfShipmentType, portOfDeliveryType])

    useEffect(() => {
        fetch(variables.API_URL + 'Stone')
            .then(data => data.json())
            .then(data => setStone(data))
    }, []);

    useEffect(()=>{
        fetch(variables.API_URL + 'Finishing')
            .then(response => response.json())
            .then(data => setFinishing(data))
    }, []);

    useEffect(()=>{
        fetch(variables.API_URL + 'Currency')
            .then(data => data.json())
            .then(data => setCurrency(data))
    }, []);

    useEffect(()=>{
        fetch(variables.API_URL + 'PortOfShipment')
            .then(data => data.json())
            .then(data => setPortOfShipment(data))
    }, []);

    useEffect(()=>{
        fetch(variables.API_URL + 'PortOfDelivery')
            .then(data => data.json())
            .then(data => setPortOfDelivery(data))
    }, []);

    const onSendData = useCallback(() => {
        const data = {
            queryId,
            stoneType,
            stoneName,
            thick,
            finishingType,
            volume,
            price,
            currencyType,
            portOfShipmentType,
            portOfDeliveryType
        }
        tg.sendData(JSON.stringify(data));
    }, [queryId, stoneType, stoneName,thick,finishingType,volume,price,currencyType,portOfShipmentType,portOfDeliveryType])

    const onSendData2 = useCallback(() => {
        fetch(variables.API_URL+'CommercialRequest', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TelegramUserId:telegramQueryId,
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
                console.log(result);
            })
    }, [queryId, stoneType,stoneName,thick,finishingType,volume,price,currencyType,portOfShipmentType,portOfDeliveryType])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    return (
        <div>
            <form>
                <label><strong>Type of stone</strong></label>
                <select onChange={handleChangeStone} value={stoneType}>
                    {stone?.map((opts, i) => <option>{opts.stoneType}</option>)}
                </select>
                <label><strong>Name of stone</strong></label>
                <input
                    type="text"
                    placeholder={'Name'}
                    value={stoneName}
                    onChange={handleChangeStoneName}
                />
                <label><strong>Geometry(Thick mm)</strong></label>
                <input
                    type="text"
                    placeholder={'Thick, mm'}
                    value={thick}
                    onChange={handleChangeThick}
                />
                <label><strong>Quantity of goods in m2</strong></label>
                <input
                    type="text"
                    placeholder={'Volume, m2'}
                    value={volume}
                    onChange={handleChangeVolume}
                />
                <label><strong>Type of finishing</strong></label>
                <select onChange={handleChangeFinishing} value={finishingType}>
                    {
                        finishing?.map((opts, i) => <option>{opts.finishingName}</option>)
                    }
                </select>
                <label><strong>Factory price per m2</strong></label>
                <input
                    type="text"
                    placeholder={'Price'}
                    value={price}
                    onChange={handleChangePrice}
                />
                <label><strong>Currency</strong></label>
                <select value={currencyType} onChange={handleChangeCurrency}>
                    {
                        currency?.map((opts, i) => <option>{opts.charCode}</option>)
                    }
                </select>
                <label><strong>Port of shipment</strong></label>
                <select value={portOfShipmentType} onChange={handleChangePortOfShipment}>
                    {
                        portOfShipment?.map((opts, i) => <option>{opts.portOfShipmentName}</option>)
                    }
                </select>
                <label><strong>Point of delivery</strong></label>
                <select value={portOfDeliveryType} onChange={handleChangePointOfDelivery}>
                    {
                        portOfDelivery?.map((opts, i) => <option>{opts.portOfDeliveryName}</option>)
                    }
                </select>
                <button type="button"
                        className="btn btn-three"
                        onClick={() => onSendData2()}
                >GO!
                </button>
            </form>
        </div>
    );
};

export default PriceForm;