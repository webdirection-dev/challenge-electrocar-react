import {useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {addNewForm, toggleModalWindow} from "../../store/chargerSlice";
import {motion, AnimatePresence} from "framer-motion";
import './modal.scss'
import iconClose from '../../icons/iconSelected.svg'

const Modal = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.chargerReducer.users)
    const toggleModal = useSelector(state => state.chargerReducer.toggleModal)

    const [isChecked, setChecked] = useState(false)
    const [isCheckedIvalid, setCheckedIvalid] = useState(true)
    const [isInput, setInput] = useState('')
    const [isInputValid, setInputValid] = useState(true)
    const [isToggleModal, setToggleModal] = useState(true)

    const handlerInput = (event) => {
        let {value} = event.target;
        let formattedInputValue = ''
        const numbersValue = getInputNumberValue(value)
        const selectionStarts = event.target.selectionStart

        if (value.length !== selectionStarts) {
            if (event.data && /\D/g.test(event.data)) value = numbersValue
        }

        if (numbersValue.length > 0) formattedInputValue += '(' + numbersValue.substring(0, 3)
        if (numbersValue.length >= 4) formattedInputValue += ') ' + numbersValue.substring(3, 6)
        if (numbersValue.length >= 7) formattedInputValue += '-' + numbersValue.substring(6, 8)
        if (numbersValue.length >= 9) formattedInputValue += '-' + numbersValue.substring(8, 10)

        if (formattedInputValue !== '') setInputValid(true)

        setInput(formattedInputValue)
    }

    const handlerPostNewForm = () => {
        if (!isChecked) setCheckedIvalid(false)
        if (isInput.length < 15) setInputValid(false)

        if (isInput.length === 15 && isChecked) {
            const name = users.filter(item => item.id === 1)[0]

            const user = {
                phone: `+7${getInputNumberValue(isInput)}`,
                name: `${name.name}`,
                callback_time: Date.now() + 300000
            }

            dispatch(addNewForm(user))
            dispatch(toggleModalWindow())
            setInput('')
        }
    }

    const getInputNumberValue = (input) => {
        return input.replace(/\D/g, '')
    }

    let classesModal = 'modal'
    let classesFooter = 'modal__footer'
    let classesForm = 'modal__form'
    let classesCheck = 'modal__agreement'

    // if (!toggleModal) classesModal += ' hidden'
    if (!isChecked) classesFooter += ' modal__footer-negative'
    if (!isInputValid) classesForm += ' modal__form-invalid'
    if (!isCheckedIvalid) classesCheck += ' modal__agreement-invalid'

    const myVariant = {
        hidden: {
            x: 1000,
            opacity: 0,
            height: 0,
            padding: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            height: 'auto',
            padding: '40px',
        },
        end: {
            // opacity: 0,
            height: 0,
            padding: 0,
        }
    }

    return(
        <AnimatePresence>
            {
                toggleModal && (
                    <div className={classesModal}>
                        <motion.div
                            className="modal__content"
                            initial={'hidden'}
                            animate={'visible'}
                            transition={{
                                duration: 0.5,
                                type: 'tween',
                            }}
                            variants={myVariant}
                            exit={'end'}
                        >
                            <motion.img
                                src={iconClose} alt="..."
                                className='modal__close'
                                onClick={() => dispatch(toggleModalWindow())}
                                whileHover={{
                                    scale: 1.5,
                                    rotate: 180,
                                    transition: {
                                        duration: 0.5
                                    }
                                }}
                            />
                            <h2 className='modal__title'>Обратный звонок</h2>
                            <p className="modal__txt">Укажите свой номер телефона, и наш менеджер свяжется с вами в течение<br/>5 минут.</p>
                            <p className='modal__subtitle'>Телефон</p>

                            <div className={classesForm}>
                                <p className='modal__region'>+ 7</p>
                                <input
                                    data-tel-input=''
                                    type="tel"
                                    maxLength="15"
                                    className='modal__input'
                                    value={isInput}
                                    onChange={event => handlerInput(event)}
                                    autoFocus
                                />
                            </div>

                            <button
                                className="modal__btn"
                                onClick={handlerPostNewForm}
                            >Перезвоните мне</button>

                            <div className={classesFooter}>
                                <p><input
                                    checked={isChecked}
                                    name='agreement'
                                    className={classesCheck}
                                    type="checkbox"
                                    onChange={() => {
                                        setChecked(!isChecked)
                                        setCheckedIvalid(true)
                                    }}
                                />Отправляя данную заявку, вы даёте своё согласие на обработку персональных данных согласно <a className='modal__link' href="#!">политике конфиденциальности</a>.</p>
                            </div>
                        </motion.div>
                    </div>
                )
            }
        </AnimatePresence>
    )
}

export default Modal