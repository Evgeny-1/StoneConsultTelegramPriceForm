import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
import logo from './Images/StoneConsult.png';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <img src={logo} width="50" height="50" />
            StoneConsult
        </div>
    );
};

export default Header;