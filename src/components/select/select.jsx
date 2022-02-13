import {useState} from "react";
import SelectList from "./selectList";

import lens from '../../icons/lens.svg'
import './select.scss'

const Select = () => {
    const [isToggleSelectList, setToggleSelectList] = useState(false)
    const [isFocus, setFocus] = useState(false)
    const [isInput, setInput] = useState('')
    const [isInvalid, setInvalid] = useState(false)

    const handlerChangeInput = (event) => {
        const {name, value} = event.target;
        // let valueToState = value;
        // if (name === 'email') valueToState = value.toLowerCase();
        // this.setState({
        //     [name]: valueToState
        // });
        // console.log(`${[name]}: ${value}`);
        setInput(value)
    };

    let classesSearch = 'select__search'
    if (isInput.length) classesSearch += ' select__search-border-filled'
    if (isFocus) classesSearch += ' select__search-border-focus'
    if (isInvalid) classesSearch += ' select__search-border-invalid'

    let classesToggleLocationList = isToggleSelectList ? 'select__actions' : 'select__actions hidden'
    let classesToggleBtns = !isToggleSelectList ? 'select__arrow' : 'select__arrow select__arrow-show'

    return(
        <div className='select__location'>
            <div className="select__header">
                <div className="select__content">
                    <div className="select__name">Локация</div>
                    <div className="select__pipe">|</div>
                    <div className="select__info"> Выбрано 0</div>
                </div>

                <i
                    className={classesToggleBtns}
                    onClick={() => setToggleSelectList(!isToggleSelectList)}
                />
            </div>

            <div className={classesToggleLocationList}>
                <div className={classesSearch}>
                    <img className='select__icon' src={lens} alt="lens"/>
                    <input
                        type="text"
                        name='location'
                        placeholder='Search'
                        className='select__input'
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        value={isInput}
                        onChange={handlerChangeInput}
                    />

                    {isInvalid && <p className='select__error'>Text about error</p>}
                </div>

                <SelectList />
            </div>
        </div>
    )
}

export default Select