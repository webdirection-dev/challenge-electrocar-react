import {useState} from "react";
import {useSelector} from "react-redux";
import {AnimatePresence, motion} from "framer-motion";

import './navbar.scss'

import AsideListTitle from "./navbarAsides/asideListTitle";
import AsideListIcons from "./navbarAsides/asideListIcons";
import BtnPhone from "./navbarAsides/btnPhone";
import BtnBug from "./navbarAsides/btnBug";

const Navbar = () => {
    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)
    const [isWidthNav, setWidthNav] = useState(241)
    const [isWidthNavHide, setWidthNavHide] = useState(64)

    const navVariant = {
        hiddenNav: {
            // width: `241px`,
            // height: '100vh'
            width: '6.4rem',
        },
        visibleNav: {
            // width: `0px`,
            // height: '100vh'
            width: '17.7rem',
        },
    }

    return(

        <aside className="aside">
            <nav className="aside__icons">
                <ul className="aside__list-icons">
                    <AsideListIcons isToggleNavbar={isToggleNavbar}/>
                </ul>
            </nav>

                <AnimatePresence initial={false}>
                    {
                        isToggleNavbar && (
                            <motion.nav
                                className="aside__navbar"
                                initial={'hiddenNav'}
                                animate={'visibleNav'}
                                transition={{
                                    duration: 0.4,
                                    type: 'tween',
                                    ease: 'easeIn'
                                }}
                                variants={navVariant}
                                exit={'hiddenNav'}
                            >
                                <ul className="aside__list-title">
                                    <AsideListTitle isToggleNavbar={isToggleNavbar}/>
                                </ul>
                            </motion.nav>
                        )
                    }
                </AnimatePresence>
        </aside>


        // <AnimatePresence >
        //     {
        //         isToggleNavbar && (
        //             <motion.aside
        //                 className='navbar'
        //                 initial={'hiddenNav'}
        //                 animate={'visibleNav'}
        //                 transition={{
        //                     duration: 0.4,
        //                     type: 'tween',
        //                     ease: 'easeInOut'
        //                 }}
        //                 variants={navVariant}
        //                 exit={'hiddenNav'}
        //             >
        //                 <div className="navbar__header">
        //                     <BtnsListNavbar isToggleNavbar={isToggleNavbar}/>
        //                 </div>
        //
        //                 <div className="navbar__footer">
        //                     <BtnPhone />
        //                     <BtnBug />
        //                 </div>
        //             </motion.aside>
        //         )
        //     }
        // </AnimatePresence>
    )
}

export default Navbar




// import {useEffect, useState} from "react";
// import {useSelector} from "react-redux";
// import {motion, AnimatePresence} from "framer-motion";
// import './navbar.scss'
//
// import BtnsListNavbar from "../navbarAsides/asideListTitle";
// import BtnPhone from "../navbarAsides/btnPhone";
// import BtnBug from "../navbarAsides/btnBug";
//
// const Navbar = () => {
//     const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)
//     const [isWidthWindow, setWidthWindow] = useState(null)
//     const [isWidthNav, setWidthNav] = useState(241)
//     const [isWidthNavHide, setWidthNavHide] = useState(64)
//
//     useEffect(() => {
//         if (isWidthWindow !== null && isWidthWindow < 992) {
//             setWidthNav(46)
//             setWidthNavHide(46)
//         }
//     }, [isWidthWindow])
//     //
//     useEffect(() => {
//         // if (window.matchMedia("(max-width: 991px)").matches) {
//         //     setWidthNav(46)
//         //     setWidthNavHide(46)
//         // }
//
//         const app = document.querySelector('.app')
//         setWidthWindow(window.getComputedStyle(app).width.replace(/\D/g, ''))
//     }, [])
//
//     const navVariant = {
//         hiddenNav: {
//             width: `${isWidthNavHide}px`,
//             height: '100vh'
//             // width: '6.4rem',
//         },
//         visibleNav: {
//             width: `${isWidthNav}px`,
//             height: '100vh'
//             // width: '24.1rem',
//         },
//     }
//
//     return(
//       <AnimatePresence >
//           {
//               isToggleNavbar && (
//                   <motion.aside
//                       className='navbar'
//                       initial={'hiddenNav'}
//                       animate={'visibleNav'}
//                       transition={{
//                           duration: 0.4,
//                           type: 'tween',
//                           ease: 'easeInOut'
//                       }}
//                       variants={navVariant}
//                       exit={'hiddenNav'}
//                   >
//                       <div className="navbar__header">
//                           <BtnsListNavbar isToggleNavbar={isToggleNavbar}/>
//                       </div>
//
//                       <div className="navbar__footer">
//                           <BtnPhone />
//                           <BtnBug />
//                       </div>
//                   </motion.aside>
//               )
//           }
//
//           {
//               !isToggleNavbar && (
//                   <motion.aside
//                       initial={'visibleNav'}
//                       animate={'hiddenNav'}
//                       transition={{
//                           duration: 0.4,
//                           type: 'tween',
//                           ease: 'easeInOut'
//                       }}
//                       variants={navVariant}
//                       exit={'visibleNav'}
//                       className='navbar__hidden'
//                   >
//                       <div className="navbar__header">
//                           <BtnsListNavbar isToggleNavbar={isToggleNavbar}/>
//                       </div>
//
//                       <div className="navbar__footer">
//                           <BtnPhone />
//                           <BtnBug />
//                       </div>
//                   </motion.aside>
//               )
//           }
//       </AnimatePresence>
//   )
// }
//
// export default Navbar