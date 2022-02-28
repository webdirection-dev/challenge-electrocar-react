import {useSelector, useDispatch} from "react-redux";
import {toggleNavbar, toggleDesktop, showWarning} from "../../../store/chargerSlice";
import {motion, AnimatePresence} from "framer-motion";

import arrLeft from "../../../icons/iconArrLeft.svg";
import arrRight from "../../../icons/iconArrRight.svg";
import iconCharger from '../../../icons/iconChar2.svg'
import iconAnalytics from '../../../icons/iconAn2.svg'
import {useEffect, useState} from "react";

const BtnItemNavbar = (props) => {
    const {
        name,
        title,
    } = props

    const [isIconsPath, setIsIconsPath] = useState('')
    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)
    const btnsHandler = name === 'collapse' ? toggleNavbar : name === 'charger' ? toggleDesktop : showWarning
    const dispatch = useDispatch()
    const handler = () => dispatch(btnsHandler())

    useEffect(() => {
        //icons
        setTimeout(() => {
            if (name === 'collapse' && !isToggleNavbar) setIsIconsPath(arrRight)
            // if (name === 'collapse' && isToggleNavbar) setIsIconsPath(arrLeft)
        }, 300)

        if (name === 'collapse') setIsIconsPath(arrLeft)
        if (name === 'charger') setIsIconsPath(iconCharger)
        if (name === 'analytics') setIsIconsPath(iconAnalytics)
        // eslint-disable-next-line
    }, [isToggleNavbar])

    return(
        <div
            className={name === 'collapse' ? 'navbar__btn navbar__btn-collapse' : 'navbar__btn'}
            onClick={handler}
        >
            <div className='navbar__content'>
                <img className='navbar__img' src={isIconsPath} alt={name}/>
                <AnimatePresence>
                    {
                        isToggleNavbar && (
                            <motion.span
                                className='navbar__txt'

                                initial={{
                                    width: '24.1rem',
                                }}

                                animate={{
                                    width: '0rem',
                                }}

                                exit={{
                                    width: '6.4rem',
                                }}

                                transition={{
                                    duration: 0.35,
                                    type: 'tween',
                                    ease: 'easeInOut'
                                }}
                            >{title}</motion.span>
                        )
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default BtnItemNavbar