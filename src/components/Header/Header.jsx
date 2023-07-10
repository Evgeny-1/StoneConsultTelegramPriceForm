import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <img src={require('../../Images/StoneConsult.png')} alt={"Logo"} className="logo__img"/>
            <span className="logo__caption"><a>STONECONSULT</a></span>
        </div>
    );
};

export default Header;