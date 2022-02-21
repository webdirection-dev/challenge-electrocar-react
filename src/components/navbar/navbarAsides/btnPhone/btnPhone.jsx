import {useSelector} from "react-redux";
import iconPhone from "../../../../icons/iconPhone.svg";

const BtnPhone = () => {
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
        <a href="tel:+78007758187"
           className={classesIconCenter}
        >
            <div className={classesNavbarContent}>
                <img className={classesNavbarImg} src={iconPhone} alt="..."/>
                {
                    isToggleNavbar ? '8 800 775 81 87' : ''
                }
            </div>
        </a>
    )
}

export default BtnPhone