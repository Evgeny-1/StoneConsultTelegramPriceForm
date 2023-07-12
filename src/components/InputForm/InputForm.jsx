import React from 'react';
import { useCallback, useEffect, useState } from "react";
import {useTelegram} from "../../hooks/useTelegram";
import "./InputForm.css"

const InputForm = (props) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    };

    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const {tg} = useTelegram();

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        if(!focused) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    return (
        <div className="formInput">
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default InputForm;