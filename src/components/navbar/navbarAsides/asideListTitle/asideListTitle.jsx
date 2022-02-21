import {useSelector} from "react-redux";
import DataNavbar from "../../../../db/navbarDb";
import AsideItemTitle from "../asideItemTitle";

const AsideListTitle = () => {
    const listVariants = {
        visible: index => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: index * 0.5,

            }
        }),
        hidden: {opacity: 0, y: 200}
    }

    return(
        DataNavbar.btnsNavbar.map((item, index) => {
            const {name} = item
            return (
                <AsideItemTitle
                    key={name}
                    {...item}
                />
            )
        })
    )
}

export default AsideListTitle




// import {motion} from "framer-motion";
// import DataNavbar from "../../../db/navbarDb";
// import BtnItemNavbar from "../asideItemTitle";
//
// import './asideListTitle.scss'
//
// const BtnsListNavbar = () => {
//     const listVariants = {
//         visible: index => ({
//             y: 0,
//             opacity: 1,
//             transition: {
//                 delay: index * 0.5,
//
//             }
//         }),
//         hidden: {opacity: 0, y: 200}
//     }
//
//     return(
//         DataNavbar.navbarAsides.map((item, index) => {
//             const {name} = item
//             return (
//                 <motion.div
//                     key={name}
//                     variants={listVariants}
//                     initial={'hidden'}
//                     animate={'visible'}
//                     custom={index}
//                 >
//                     <BtnItemNavbar
//                         // key={name}
//                         {...item}
//                     />
//                 </motion.div>
//             )
//         })
//     )
// }
//
// export default BtnsListNavbar