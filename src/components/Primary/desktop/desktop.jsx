import {useSelector} from "react-redux";
import './desktop.scss'

const Desktop = () => {
    const isToggleDesktop = useSelector(state => state.chargerReducer.isToggleDesktop)

    //classes
    if (!isToggleDesktop) {
        return(
            <div className='desktop__welcome'>Пожалуйста, выберите категорию из меню...</div>
        )
    }

    return(
        <div className='desktop' />
    )
}

export default Desktop