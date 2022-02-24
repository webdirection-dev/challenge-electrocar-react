import {useSelector} from "react-redux";
import iconPhone from "../../../icons/iconPhone2.svg";
import {AnimatePresence, motion} from "framer-motion";

const BtnPhone = () => {
    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)

    return(
        <a href="tel:+78007758187"
           className='navbar__btn navbar__tel'
        >
            <div className='navbar__content'>
                <img className='navbar__img' src={iconPhone} alt="..."/>
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
                            >8 800 775 81 87</motion.span>
                        )
                    }
                </AnimatePresence>
            </div>
        </a>
    )
}

export default BtnPhone