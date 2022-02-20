import {useSelector} from "react-redux";
import iconUser from '../../icons/iconUser.svg'
import './userPanel.scss'

const UserPanel = () => {
    // const users = useSelector(state => state.chargerReducer.users)
    // const user = users.filter(item => item.id === 1)[0]

    return(
        <div className="user">
            <a href="#!">
                <img src={iconUser} alt="..." />
            </a>
            <p className='user__txt'>Алексанр Константиновский</p>
            <i className="user__arrow" />
        </div>
    )
}

export default UserPanel