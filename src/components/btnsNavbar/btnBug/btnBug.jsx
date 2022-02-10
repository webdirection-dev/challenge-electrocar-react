import {useSelector} from "react-redux";
import iconBug from "../../../icons/iconBug.svg";

const BtnBug = () => {
    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)

    // classes
    let classesIconCenter = 'navbar__btn navbar__tel'
    let classesNavbarContent = 'navbar__content'
    let classesNavbarImg = 'navbar__img'

    if (!isToggleNavbar) {
        classesIconCenter = classesIconCenter + ' navbar__btn-center'
        classesNavbarContent = ''
        classesNavbarImg = ''
    }

    return(
        <div
            className={classesIconCenter}
        >
            <div className={classesNavbarContent}>
                <img className={classesNavbarImg} src={iconBug} alt="..."/>
                {
                    isToggleNavbar ? 'Сообщить о баге' : ''
                }
            </div>
        </div>
    )
}

export default BtnBug