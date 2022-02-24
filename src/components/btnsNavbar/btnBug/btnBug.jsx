import {useSelector} from "react-redux";
import iconBug from "../../../icons/iconBug2.svg";
import {AnimatePresence, motion} from "framer-motion";

const BtnBug = () => {
    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)

    return(
        <div
            className='navbar__btn navbar__tel'
        >
            <div className='navbar__content'>
                <img className='navbar__img' src={iconBug} alt="..."/>
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
                            >Сообщить о баге</motion.span>
                        )
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default BtnBug