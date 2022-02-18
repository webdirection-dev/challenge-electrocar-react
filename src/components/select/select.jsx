import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {motion, AnimatePresence} from "framer-motion";

import {changeInput} from "../../store/chargerSlice";
import SelectList from "./selectList";

import lens from '../../icons/lens.svg'
import './select.scss'

const Select = () => {
    const dispatch = useDispatch()
    const isInput = useSelector(state => state.chargerReducer.isInput)
    console.log(isInput)

    const counterPointsSelectStatus = useSelector(state => state.chargerReducer.counterPointsSelectStatus)
    const counterAllSelectPoints = useSelector(state => state.chargerReducer.counterAllSelectPoints)

    const [isToggleSelectList, setToggleSelectList] = useState(false)
    const [isFocus, setFocus] = useState(false)
    const [isInvalid, setInvalid] = useState(false)

    const handlerChangeInput = (event) => {
        event.preventDefault()
        const value = getInputNumberValue(event.target.value)

        dispatch(changeInput({input: value}))
    };

    const getInputNumberValue = (input) => {
        const reg = /[^а-яё ]/iu

        if (reg.test(input)) {
            setInvalid(true)
        } else setInvalid(false)

        return input.replace(reg, '')
    }

    let classesSearch = 'select__search'
    if (isInput.length > 0) classesSearch += ' select__search-border-filled'
    if (isFocus) classesSearch += ' select__search-border-focus'
    if (isInvalid) classesSearch += ' select__search-border-invalid'

    let classesToggleLocationList = 'select__actions'
    let classesHeader = !isToggleSelectList ? 'select__header' : 'select__header select__header-visible'
    let classesToggleBtns = !isToggleSelectList ? 'select__arrow' : 'select__arrow select__arrow-show'

    let classesInfo = counterPointsSelectStatus > 0 ? '' : 'select__info'

    const pointsVariant = {
        hiddenPoints: {
            height: 0,
        },
        visiblePoints: {
            height: 'auto',
        },
    }

    return(
        <div className='select__location'>
            <div className={classesHeader}>
                <div className="select__content">
                    <div className="select__name">Локация</div>
                    <div className="select__pipe">|</div>
                    <div className={classesInfo}>Выбрано {counterAllSelectPoints}</div>
                </div>

                <i
                    className={classesToggleBtns}
                    onClick={() => setToggleSelectList(!isToggleSelectList)}
                />
            </div>

            <AnimatePresence>
                {
                    isToggleSelectList && (
                        <motion.div
                            className={classesToggleLocationList}
                            initial={'hiddenPoints'}
                            animate={'visiblePoints'}
                            transition={{
                                duration: 0.4,
                                type: 'tween',
                                ease: 'easeInOut'
                            }}
                            variants={pointsVariant}
                            exit={'hiddenPoints'}
                        >
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

                            <SelectList isInput={isInput}/>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default Select