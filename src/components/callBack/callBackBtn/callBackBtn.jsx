import {useDispatch} from "react-redux";
import {toggleModalWindow} from "../../../store/chargerSlice";

import icon from '../../../icons/iconCallback.svg'
import './callBackBtn.scss'

const CallBackBtn = () => {
    const dispatch = useDispatch()

    return(
        <button
            className='callback-btn'
            onClick={() => dispatch(toggleModalWindow())}
        >
            <img src={icon} alt="callback"/>
        </button>
    )
}

export default CallBackBtn