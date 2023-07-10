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
        <div>
            <Header/>

            <CalculatorForm placeholder="Наименование камня"/>
            <select value={myCar} onChange={handleChange}>
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


            <form>
                <label>Геометрия</label>
                <label>
                    <input className="my_input" type="text" name="username"/>
                </label>
                <label>
                    <input className="my_input" type="text" name="age"/>
                </label>
                <label>
                    <input className="my_input" type="text" name="age"/>
                </label>
            </form>

            <CalculatorForm placeholder="Объем, м2"/>
            <form>
                <label>Цена завода за м2</label>
                <label>
                    <input className="my_input2" type="text" name="age"/>
                </label>
                <select className={'currency_select'} value={myCar} onChange={handleChange}>
                    <option value="$">$</option>
                    <option value="€">€</option>
                    <option value="₽">₽</option>
                </select>
            </form>


            <form>
                <label>Порт  отргрузки </label>
                <select className={'port_select'} value={myCar} onChange={handleChange}>
                    <option value="Бандерабас">Бандерабас</option>
                    <option value="Владивосток">Владивосток</option>
                    <option value="Ксяньмынь">Ксяньмынь</option>
                </select>
            </form>

            <form>
                <label>Место доставки</label>
                <select className={'port_select'} value={myCar} onChange={handleChange}>
                    <option value="Владикавказ">Бандерабас</option>
                    <option value="Новороссийск">Владивосток</option>
                    <option value="Санкт-Петербург">Ксяньмынь</option>
                    <option value="Москва">Ксяньмынь</option>
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
