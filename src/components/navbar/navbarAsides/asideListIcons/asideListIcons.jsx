import {motion} from "framer-motion";
import DataNavbar from "../../../../db/navbarDb";
import AsideItemIcon from "../asideItemIcon";

const AsideListIcons = () => {
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
                <AsideItemIcon
                    key={name}
                    {...item}
                />
            )
        })
    )
}

export default AsideListIcons