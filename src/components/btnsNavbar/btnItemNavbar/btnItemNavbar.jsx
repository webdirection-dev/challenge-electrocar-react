import {useSelector, useDispatch} from "react-redux";
import {toggleNavbar, toggleDesktop, showWarning} from "../../../store/chargerSlice";

import arrLeft from "../../../icons/iconArrLeft.svg";
import arrRight from "../../../icons/iconArrRight.svg";
import iconCharger from '../../../icons/iconCharger.svg'

const BtnItemNavbar = (props) => {
    const {
        name,
        title,
    } = props

    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)
    const isToggleDesktop = useSelector(state => state.chargerReducer.isToggleDesktop)
    const dispatch = useDispatch()

    const btnsHandler = name === 'collapse' ? toggleNavbar : name === 'charger' ? toggleDesktop : showWarning
    const handler = () => dispatch(btnsHandler())
    // const handlerToggleNavbar = () => dispatch(toggleNavbar())

    // icons
    let icon = null
    // Для кнопки Свернуть
    if (name === 'collapse' && isToggleNavbar) icon = arrLeft
    if (name === 'collapse' && !isToggleNavbar) icon = arrRight
    // Для кнопки Зарядные сессии
    if (name === 'charger') icon = iconCharger

    // classes
    let classesIconCenter = 'navbar__btn'
    if (isToggleDesktop && name === 'charger') classesIconCenter = classesIconCenter + ' navbar__btn-lighter'

    let classesNavbarContent = ''
    let classesNavbarImg = ''
    // классы для кнопки Свернуть
    if (name === 'collapse') {
        classesNavbarContent = 'navbar__content'
        classesNavbarImg = 'navbar__img'
    }
    // классы для кнопки Зарядные сессии
    if (name === 'charger') {
        classesNavbarContent = 'navbar__content-charger'
        classesNavbarImg = 'navbar__charger'
    }

    if (!isToggleNavbar) {
        classesIconCenter = classesIconCenter + ' navbar__btn-center'
        classesNavbarContent = ''
        classesNavbarImg = ''
    }

    return(
        <div
            className={classesIconCenter}
            onClick={handler}
            // onClick={handlerToggleNavbar}
        >
            <div className={classesNavbarContent}>
                <img className={classesNavbarImg} src={icon} alt={name}/>
                {
                    isToggleNavbar ? `${title}` : ''
                }
            </div>
        </div>
    )
}

export default BtnItemNavbar