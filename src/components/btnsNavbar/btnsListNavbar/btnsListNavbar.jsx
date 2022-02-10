import DataNavbar from "../../db/navbarDb";
import BtnItemNavbar from "../btnItemNavbar";

import './btnsListNavbar.scss'

const BtnsListNavbar = () => {
    return(
        DataNavbar.btnsNavbar.map(item => {
            const {name} = item
            return <BtnItemNavbar
                key={name}
                {...item}
            />
        })
    )
}

export default BtnsListNavbar