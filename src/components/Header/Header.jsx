import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user} = useTelegram();

    return (
        <div className={'header_container'}>
            <div className={'A'}>
                <img src={require('../../Images/StoneConsult.png')} alt={"Logo"} className="logo__img"/>
            </div>
            <div className={'B'}>
                <label className={'logo'}><strong>StoneConsult</strong></label>
            </div>
            <div className={'C'}>
                <img src={require('../../Images/StoneConsult-Service.png')} alt={"transport"} className="transport__img"/>
            </div>
            <div className={'D'}>
                <hr className="hr-horizontal-gradient"/>
            </div>

        </div>
    );
};

export default Header;