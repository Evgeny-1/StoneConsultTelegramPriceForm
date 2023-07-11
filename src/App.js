import './App.css';
import React, {useState} from "react";
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom';
import CalculatorForm from "./components/InputCalculatorForm/InputCalculatorForm";


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [inputs, setInputs] = useState({});

    const handleChangee = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmitt = (event) => {
        event.preventDefault();
        alert(inputs);
    }


    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <div className={'container'}>
            <Header/>
            <form>
                <label><strong>Вид камня</strong></label>
                <select className={'port_select'} value={myCar} onChange={handleChange}>
                    <option value="Гранит">Гранит</option>
                    <option value="Мрамор">Мрамор</option>
                    <option value="Лабрадорит">Лабрадорит</option>
                    <option value="Кварц">Кварц</option>
                    <option value="Кварцит">Кварцит</option>
                    <option value="Известняк">Известняк</option>
                    <option value="Травертин">Травертин</option>
                    <option value="Сланец">Сланец</option>
                    <option value="Песчанник">Песчанник</option>
                    <option value="Оникс">Оникс</option>
                    <option value="Базальт">Базальт</option>
                    <option value="Аметист">Аметист</option>
                    <option value="Агат">Агат</option>
                </select>
                <label><strong>Геометрия</strong></label>
                <CalculatorForm placeholder="Толщина, мм"/>
                <label><strong>Кол-во товара в м2</strong></label>
                <CalculatorForm placeholder="Объем, м2"/>
                <label><strong>Цена завода за м2</strong></label>
                <CalculatorForm placeholder="Цена"/>
                <label><strong>Валюта</strong></label>
                <select className={'port_select'} value={myCar} onChange={handleChange}>
                    <option value="$">$</option>
                    <option value="€">€</option>
                    <option value="₽">₽</option>
                </select>
                <label><strong>Порт отгрузки</strong></label>
                <select className={'port_select'} value={myCar} onChange={handleChange}>
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
                <label><strong>Место доставки</strong></label>
                <select className={'port_select'} value={myCar} onChange={handleChange}>
                    <option value="Владикавказ">Владикавказ</option>
                    <option value="Новороссийск">Новороссийск</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                    <option value="Москва">Москва</option>
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
