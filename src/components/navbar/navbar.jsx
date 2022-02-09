import {useState} from "react";
import './navbar.scss'

import arrLeft from '../../icons/iconArrLeft.svg'
import arrRight from '../../icons/iconArrRight.svg'
import iconCharger from '../../icons/iconCharger.svg'
import iconPhone from '../../icons/iconPhone.svg'
import iconBug from '../../icons/iconBug.svg'

const Navbar = () => {
    const [isToggleNavbar, setToggleNavbar] = useState(true)

    const handlerToggleNavbar = () => {
        setToggleNavbar(!isToggleNavbar)
    }

    // icons
    let iconToggleNavbar = arrLeft

    // classes
    let classesToggleNavbar = 'navbar'
    let classesIconCenter = 'navbar__btn navbar__tel'
    let classesNavbarContent = 'navbar__content'
    let classesNavbarImg = 'navbar__img'
    let classesNavbarCharger = 'navbar__charger'
    let classesNavbarContentCharger = 'navbar__content-charger'

    if (!isToggleNavbar) {
        iconToggleNavbar = arrRight
        classesToggleNavbar = classesToggleNavbar + ' navbar__hidden'
        classesIconCenter = classesIconCenter + ' navbar__btn-center'
        classesNavbarContent = ''
        classesNavbarContentCharger = ''
        classesNavbarImg = ''
        classesNavbarCharger = ''
    }

  return(
      <View
          isToggleNavbar={isToggleNavbar}
          
          handlerToggleNavbar={handlerToggleNavbar}

          iconToggleNavbar={iconToggleNavbar}

          classesToggleNavbar={classesToggleNavbar}
          classesIconCenter={classesIconCenter}
          classesNavbarContent={classesNavbarContent}
          classesNavbarContentCharger={classesNavbarContentCharger}
          classesNavbarImg={classesNavbarImg}
          classesNavbarCharger={classesNavbarCharger}
      />
  )
}

export default Navbar

const View = (props) => {
    const {
        isToggleNavbar,

        handlerToggleNavbar,

        iconToggleNavbar,
        classesToggleNavbar,
        classesIconCenter,
        classesNavbarContent,
        classesNavbarContentCharger,
        classesNavbarImg,
        classesNavbarCharger,
    } = props

    return(
        <aside
            className={classesToggleNavbar}
        >
            <div className="navbar__header">
                <div
                    className={classesIconCenter}
                    onClick={handlerToggleNavbar}
                >
                    <div className={classesNavbarContent}>
                        <img className={classesNavbarImg} src={iconToggleNavbar} alt="..."/>
                        {
                            isToggleNavbar ? 'Свернуть' : ''
                        }
                    </div>
                </div>

                <div
                    className={classesIconCenter}
                    onClick={handlerToggleNavbar}
                >
                    <div className={classesNavbarContentCharger}>
                        <img className={classesNavbarCharger} src={iconCharger} alt="..."/>
                        {
                            isToggleNavbar ? 'Зарядные сессии' : ''
                        }
                    </div>
                </div>
            </div>

            <div className="navbar__footer">
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

                <div
                    className={classesIconCenter}
                    onClick={handlerToggleNavbar}
                >
                    <div className={classesNavbarContent}>
                        <img className={classesNavbarImg} src={iconBug} alt="..."/>
                        {
                            isToggleNavbar ? 'Сообщить о баге' : ''
                        }
                    </div>
                </div>
            </div>
        </aside>
    )
}