import {useState} from "react";
import {useSelector} from "react-redux";

import SelectList from "./selectList";

import lens from '../../icons/lens.svg'
import './select.scss'

const Select = () => {
    const counterPointsSelectStatus = useSelector(state => state.chargerReducer.counterPointsSelectStatus)

    const [isToggleSelectList, setToggleSelectList] = useState(false)
    const [isFocus, setFocus] = useState(false)
    const [isInput, setInput] = useState('')
    const [isInvalid, setInvalid] = useState(false)

    const handlerChangeInput = (event) => {
        event.preventDefault()
        const target = event.target

        const {name, value} = target;
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

    let classesInfo = counterPointsSelectStatus > 0 ? '' : 'select__info'

    return(
        <div className='select__location'>
            <div className="select__header">
                <div className="select__content">
                    <div className="select__name">Локация</div>
                    <div className="select__pipe">|</div>
                    <div className={classesInfo}>Выбрано {counterPointsSelectStatus}</div>
                </div>

                <i
                    className={classesToggleBtns}
                    onClick={() => setToggleSelectList(!isToggleSelectList)}
                />
            </div>

            <div className={classesToggleLocationList}>
                <div className={classesSearch}>
                    <img className='select__icon' src={lens} alt="lens"/>
                    <form
                        action=""
                        autoComplete='off'
                    >
                        <input
                            type="search"
                            name='locationSearch'
                            placeholder='Search'
                            className='select__input'
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            value={isInput}
                            onChange={handlerChangeInput}
                        />
                    </form>

                    {isInvalid && <p className='select__error'>Text about error</p>}
                </div>

                <SelectList />
            </div>
        </div>
    )
}

export default Select