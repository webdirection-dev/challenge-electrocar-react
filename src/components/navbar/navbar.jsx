import {useSelector} from "react-redux";
import {motion} from "framer-motion";
import './navbar.scss'

import BtnsListNavbar from "../btnsNavbar/btnsListNavbar";
import BtnPhone from "../btnsNavbar/btnPhone";
import BtnBug from "../btnsNavbar/btnBug";

const Navbar = () => {
    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)

    return(
        <>
            <motion.aside
                className='navbar'

                initial={{
                    width: isToggleNavbar ? '24.1rem' : '6.4rem',
                }}

                animate={{
                    width: !isToggleNavbar ? '6.4rem' : '24.1rem',
                }}

                transition={{
                    duration: 0.4,
                    type: 'tween',
                    ease: 'easeInOut'
                }}
            >
                <div className="navbar__header">
                    <BtnsListNavbar isToggleNavbar={isToggleNavbar}/>
                </div>

                <div className="navbar__footer">
                    <BtnPhone />
                    <BtnBug />
                </div>
            </motion.aside>

            <aside className='navbar navbar__mini'>
                <div className="navbar__header">
                    <BtnsListNavbar isToggleNavbar={isToggleNavbar}/>
                </div>

                <div className="navbar__footer">
                    <BtnPhone />
                    <BtnBug />
                </div>
            </aside>
        </>
    )
}

export default Navbar