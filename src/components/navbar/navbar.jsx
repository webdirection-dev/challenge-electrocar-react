import {useSelector} from "react-redux";
import './navbar.scss'

import BtnsListNavbar from "../btnsNavbar/btnsListNavbar";
import BtnPhone from "../btnsNavbar/btnPhone";
import BtnBug from "../btnsNavbar/btnBug";

const Navbar = () => {
    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)

    let classesToggleNavbar = 'navbar'
    if (!isToggleNavbar) {
        classesToggleNavbar = classesToggleNavbar + ' navbar__hidden'
    }

  return(
      <aside className={classesToggleNavbar}>
          <div className="navbar__header">
              <BtnsListNavbar isToggleNavbar={isToggleNavbar}/>
          </div>

          <div className="navbar__footer">
              <BtnPhone />
              <BtnBug />
          </div>
      </aside>
  )
}

export default Navbar