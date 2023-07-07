import React from 'react';
import "./InputCalculatorForm.css"
const InputCalculatorForm = (props) => {
    return(
        <div className="InputCalculatorForm">
            {/*<label>Курс ЦБ</label>*/}
            <input placeholder={props.placeholder}></input>
        </div>
    )
}

export default InputCalculatorForm;