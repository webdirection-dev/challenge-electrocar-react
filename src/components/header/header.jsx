import Logo from "../logo";
import UserPanel from "../userPanel";
import './header.scss'

const Header = () => {
    return(
        <header className='header'>
            <Logo />
            <UserPanel />
        </header>
    )
}

export default Header