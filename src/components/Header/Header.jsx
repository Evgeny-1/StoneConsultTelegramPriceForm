import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <body>
        <div className={'header_container'}>
            <img src={require('../../Images/StoneConsult.png')} alt={"Logo"} className="logo__img"/>
            <span className="caption"><a>StoneConsult</a></span>
        </div>
        </body>
    );
};

export default Header;