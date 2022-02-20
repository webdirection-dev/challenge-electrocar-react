import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {motion, AnimatePresence} from "framer-motion";
import './navbar.scss'

import BtnsListNavbar from "../btnsNavbar/btnsListNavbar";
import BtnPhone from "../btnsNavbar/btnPhone";
import BtnBug from "../btnsNavbar/btnBug";

const Navbar = () => {
    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)
    const [isWidthWindow, setWidthWindow] = useState(null)
    const [isWidthNav, setWidthNav] = useState(241)
    const [isWidthNavHide, setWidthNavHide] = useState(64)
    console.log(isWidthWindow)

    useEffect(() => {
        if (isWidthWindow !== null && isWidthWindow < 992) {
            setWidthNav(46)
            setWidthNavHide(46)
        }
    }, [isWidthWindow])

    useEffect(() => {
        const app = document.querySelector('.app')
        setWidthWindow(window.getComputedStyle(app).width.replace(/\D/g, ''))
    }, [])

    const navVariant = {
        hiddenNav: {
            width: `${isWidthNavHide}px`,
            // width: '6.4rem',
        },
        visibleNav: {
            width: `${isWidthNav}px`,
            // width: '24.1rem',
        },
    }

    return(
      <AnimatePresence >
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