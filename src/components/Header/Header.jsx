import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header_container'}>
            <div className={'A'}>
                <img src={require('../../Images/StoneConsult.png')} alt={"Logo"} className="logo__img"/>
            </div>
            <div className={'B'}>
                <label>StoneConsult</label>
            </div>

        </div>
    );
};

export default Header;