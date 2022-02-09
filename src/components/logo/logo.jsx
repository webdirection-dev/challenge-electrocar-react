import logo from "../../icons/logo.svg";
import './logo.scss'

const Logo = () => {
    return(
        <a href='#!' className="logo">
            <img src={logo} alt="..."/>
            <p className="logo__txt">Управление зарядными станциями</p>
        </a>
    )
}

export default Logo