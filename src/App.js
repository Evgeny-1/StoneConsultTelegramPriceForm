import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import CalculatorForm from "./components/InputCalculatorForm/InputCalculatorForm";

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
      <div className="app">
        <form>
            <Header />
            <CalculatorForm placeholder = "Курс ЦБ"/>

            <CalculatorForm placeholder = "Валюта($/€)"/>
            <CalculatorForm placeholder = "Страна"/>
            <CalculatorForm placeholder = "Цена завода за м2"/>

            <CalculatorForm placeholder = "Ширина"/>
            <CalculatorForm placeholder = "Длина"/>
            <CalculatorForm placeholder = "Толщина"/>

            <CalculatorForm placeholder = "Плотность"/>

            <CalculatorForm placeholder = "Объем"/>
            <CalculatorForm placeholder = "Тоннаж"/>
            <CalculatorForm placeholder = "Вместимость контейнера"/>

            <CalculatorForm placeholder = "Фрахт"/>
            <CalculatorForm placeholder = "Прочее"/>
            <CalculatorForm placeholder = "Пошлина"/>

            <CalculatorForm placeholder = "НДС до РФ"/>

            <CalculatorForm placeholder = "Банковские расходы"/>

            <CalculatorForm placeholder = "Фрахт без НДС"/>
            <CalculatorForm placeholder = "Прочее без НДС"/>
            <CalculatorForm placeholder = "Фрахт с НДС"/>
            <CalculatorForm placeholder = "Прочее с НДС"/>

            <CalculatorForm placeholder = "НДС по РФ"/>

            <CalculatorForm placeholder = "Наценка"/>

            <CalculatorForm placeholder = "Наименование камня($/€)"/>

            <CalculatorForm placeholder = "Цена за м2($/€)"/>
            <CalculatorForm placeholder = "Цена за м2(руб)"/>
            <CalculatorForm placeholder = "Цена за шт($/€)"/>
            <CalculatorForm placeholder = "Цена за шт(руб)"/>
        </form>


        {/*<Routes>*/}

        {/*  <Route index element={<ProductList />}/>*/}
        {/* <Route path={'form'} element={<Form />}/>*/}

        {/*</Routes>*/}
      </div>
  );
}

export default App;
