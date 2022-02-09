import iconUser from '../../icons/iconUser.svg'
import './userPanel.scss'

const UserPanel = () => {
    return(
        <div className="user">
            <a href="#!">
                <img src={iconUser} alt="..." />
            </a>
            <p className='user__txt'>Александр Константиновский</p>
            <i className="user__arrow" />
        </div>
    )
}

export default UserPanel