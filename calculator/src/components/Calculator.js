import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
    const [number, setNumber] = useState("")
    const handleValueChange = (e) => {
        let value = e.target.innerText;
        if (value === 'C') {
            setNumber("")
        }
        else if (value === 'CT') {
            if (typeof number === 'number') {
                let resultNumber = number.toString();
                let sliceNumber = resultNumber.slice(0, -1);
                setNumber(sliceNumber)
            }
            else {
                setNumber(number.slice(0, -1))
            }

        }
        else if (value === '%') {
            setNumber(number + "/100")
        }
        else if (value === '=') {
            if (number === '') {
                setNumber("")
            }
            else {
                let newNumber = eval(number)
                setNumber(newNumber)
            }
        }
        else {
            setNumber(number + "" + value)
        }
    }
    return (
        <div className='calculator'>
            <div className="calculatorBox">
                <div className="calculatorHeading">
                    <p>Calculator</p>
                    <p>Calculator</p>
                </div>
                <div className="calculatorMain">
                    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
                    <button className="btns" onClick={handleValueChange}>(</button>
                    <button className="btns" onClick={handleValueChange}>)</button>
                    <button className="btns" onClick={handleValueChange}>C</button>
                    <button className="btns" onClick={handleValueChange}>CT</button>
                    <button className="btns" onClick={handleValueChange}>7</button>
                    <button className="btns" onClick={handleValueChange}>8</button>
                    <button className="btns" onClick={handleValueChange}>9</button>
                    <button className="btns" onClick={handleValueChange}>+</button>
                    <button className="btns" onClick={handleValueChange}>4</button>
                    <button className="btns" onClick={handleValueChange}>5</button>
                    <button className="btns" onClick={handleValueChange}>6</button>
                    <button className="btns" onClick={handleValueChange}>-</button>
                    <button className="btns" onClick={handleValueChange}>1</button>
                    <button className="btns" onClick={handleValueChange}>2</button>
                    <button className="btns" onClick={handleValueChange}>3</button>
                    <button className="btns" onClick={handleValueChange}>*</button>
                    <button className="btns" onClick={handleValueChange}>0</button>
                    <button className="btns" onClick={handleValueChange}>00</button>
                    <button className="btns" onClick={handleValueChange}>.</button>
                    <button className="btns" onClick={handleValueChange}>/</button>
                    <button className="btns" onClick={handleValueChange}>%</button>
                    <button className="btns" onClick={handleValueChange}>=</button>

                </div>
            </div>
        </div>
    )
}

export default Calculator
