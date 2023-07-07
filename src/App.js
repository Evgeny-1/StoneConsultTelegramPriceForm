import './App.css';
import React, { useState } from "react";
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
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();
  };

  return (
      <div className="app">
          <form onSubmit={handleSubmit}>
          <h1>StoneConsult</h1>
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
          <div>"Контейнеры (шт)"</div>

          <div>"Инвойс"</div>

          <CalculatorForm placeholder = "Фрахт"/>
          <CalculatorForm placeholder = "Прочее"/>
          <CalculatorForm placeholder = "Пошлина"/>
          <div>"Итого"</div>

          <CalculatorForm placeholder = "НДС до РФ"/>
              <div>"Итого"</div>

          <CalculatorForm placeholder = "Банковские расходы"/>
                  <div>"Итого"</div>

          <CalculatorForm placeholder = "Фрахт без НДС"/>
          <CalculatorForm placeholder = "Прочее без НДС"/>
          <CalculatorForm placeholder = "Фрахт с НДС"/>
          <CalculatorForm placeholder = "Прочее с НДС"/>

          <CalculatorForm placeholder = "НДС по РФ"/>
          <div>"Итого"</div>

          <CalculatorForm placeholder = "Наценка"/>
          <div>"Итого"</div>

          <CalculatorForm placeholder = "Наименование камня($/€)"/>

          <div>"Итого по Заказу"</div>
          <div>"Цена за м2($/€)"</div>
          <div>"Цена за м2(руб)"</div>
          <div>"Цена за шт($/€)"</div>
          <div>"Цена за шт(руб)"</div>
            </form>

        {/*<Routes>*/}

        {/*  <Route index element={<ProductList />}/>*/}
        {/* <Route path={'form'} element={<Form />}/>*/}

        {/*</Routes>*/}
      </div>
  );
}

export default App;
