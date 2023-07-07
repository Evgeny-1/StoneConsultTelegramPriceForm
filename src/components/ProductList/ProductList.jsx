import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";

const products = [
    {id: '1', title: 'Trambisera', price: 9900, description: 'Мрамор, Серый, Италия'},
    {id: '2', title: 'Baobab', price: 12000, description: 'Лабрадорит, Синий, Италия'},
    {id: '3', title: 'Blue Pearl', price: 5000, description: 'Лабрадорит, Синий, Италия'},
    {id: '4', title: 'Amphibolite Black', price: 12200, description: 'Гранит, Черный, Вьетнам'},
    {id: '5', title: 'Amazonite', price: 5000, description: 'Гранит, Зеленый, Италия'},
    {id: '6', title: 'Blanc Du Blanc', price: 6000, description: 'Гранит, Желтый, Бразилия'},
    {id: '7', title: 'Aurora Borealis', price: 5500, description: 'Кварцит, Cерый, Бразилия'},
    {id: '8', title: 'Beige Topazio', price: 12000, description: 'Травертин, Бежевый, Португалия'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://85.119.146.179:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;