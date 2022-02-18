import {useSelector} from "react-redux";
import {motion, AnimatePresence} from "framer-motion";
import './navbar.scss'

import BtnsListNavbar from "../btnsNavbar/btnsListNavbar";
import BtnPhone from "../btnsNavbar/btnPhone";
import BtnBug from "../btnsNavbar/btnBug";

const Navbar = () => {
    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)

    let classesToggleNavbar = 'navbar'

    const navVariant = {
        hiddenNav: {
            width: '6.4rem',
        },
        visibleNav: {
            width: '24.1rem',
        },
    }

    // const hideVariant = {
    //     hiddenNav: {
    //         width: '24.1rem',
    //     },
    //     visibleNav: {
    //         width: '6.4rem',
    //     },
    // }

  return(
      <AnimatePresence>
          {
              isToggleNavbar && (
                  <motion.aside
                      className='navbar'
                      initial={'hiddenNav'}
                      animate={'visibleNav'}
                      transition={{
                          duration: 0.4,
                          type: 'tween',
                          ease: 'easeInOut'
                      }}
                      variants={navVariant}
                      exit={'hiddenNav'}
                  >
                      <div className="navbar__header">
                          <BtnsListNavbar isToggleNavbar={isToggleNavbar}/>
                      </div>

                      <div className="navbar__footer">
                          <BtnPhone />
                          <BtnBug />
                      </div>
                  </motion.aside>
              )
          }

          {
              !isToggleNavbar && (
                  <motion.aside
                      className='navbar navbar-hidden'
                      // initial={'visibleNav'}
                      // animate={'hiddenNav'}
                      // transition={{
                      //     duration: 0.4,
                      //     type: 'tween',
                      //     ease: 'easeInOut'
                      // }}
                      // variants={hideVariant}
                      // exit={'hiddenNav'}
                  >
                      <div className="navbar__header">
                          <BtnsListNavbar isToggleNavbar={isToggleNavbar}/>
                      </div>

                      <div className="navbar__footer">
                          <BtnPhone />
                          <BtnBug />
                      </div>
                  </motion.aside>
              )
          }
      </AnimatePresence>
  )
}

export default Navbar