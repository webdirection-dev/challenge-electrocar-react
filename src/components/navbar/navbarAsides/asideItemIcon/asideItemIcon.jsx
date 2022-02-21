import {useSelector, useDispatch} from "react-redux";
import {
    toggleNavbar,
    toggleDesktop,
    showWarning,
    handlerHoverToggleNav,
    handlerHoverCharger,
    handlerHoverAnalytics,
    handlerHoverPhone,
    handlerHoverBugs,
} from "../../../../store/chargerSlice";

import arrLeft from "../../../../icons/iconArrLeft.svg";
import arrRight from "../../../../icons/iconArrRight.svg";
import iconCharger from '../../../../icons/iconCharger.svg'
import iconAnalytics from '../../../../icons/iconAnalytics.svg'
import iconPhone from '../../../../icons/iconPhone.svg'
import iconBug from '../../../../icons/iconBug.svg'

const AsideItemIcon = ({name}) => {

    const isHoverToggleNav = useSelector(state => state.chargerReducer.isHoverToggleNav)
    const isHoverCharger = useSelector(state => state.chargerReducer.isHoverCharger)
    const isHoverAnalytics = useSelector(state => state.chargerReducer.isHoverAnalytics)
    const isHoverPhone = useSelector(state => state.chargerReducer.isHoverPhone)
    const isHoverBugs = useSelector(state => state.chargerReducer.isHoverBugs)

    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)
    const dispatch = useDispatch()

    // icons
    let icon = null

    // Icons
    if (name === 'collapse' && isToggleNavbar) icon = arrLeft
    if (name === 'collapse' && !isToggleNavbar) icon = arrRight
    if (name === 'charger') icon = iconCharger
    if (name === 'analytics') icon = iconAnalytics
    if (name === 'phone') icon = iconPhone
    if (name === 'bugs') icon = iconBug

    const onClickHandler = (name === 'collapse') ? toggleNavbar : (name === 'charger') ? toggleDesktop : showWarning

    //Hover
    let onHoverHandler = Function.prototype
    if (name === 'collapse') onHoverHandler = handlerHoverToggleNav
    if (name === 'charger') onHoverHandler = handlerHoverCharger
    if (name === 'analytics') onHoverHandler = handlerHoverAnalytics
    if (name === 'phone') onHoverHandler = handlerHoverPhone
    if (name === 'bugs') onHoverHandler = handlerHoverBugs

    let classesHover = 'aside__icon'
    if (name === 'collapse' && isHoverToggleNav) classesHover += ' aside__hover'
    if (name === 'charger' && isHoverCharger) classesHover += ' aside__hover'
    if (name === 'analytics' && isHoverAnalytics) classesHover += ' aside__hover'
    if (name === 'phone' && isHoverPhone) classesHover += ' aside__hover'
    if (name === 'bugs' && isHoverBugs) classesHover += ' aside__hover'


    return(
        <View
            dispatch={dispatch}
            onClickHandler={onClickHandler}
            onHoverHandler={onHoverHandler}
            classesHover={classesHover}
            icon={icon}
            name={name}
        />
    )
}

export default AsideItemIcon

// const View = (props) => {
//     const {
//         dispatch,
//         onClickHandler,
//         classesHover,
//         icon,
//         name,
//     } = props
//
//     if (name === 'collapse' || name === 'charger' || name === 'analytics' || name === 'bugs') {
//         return(
//             <li
//                 className={classesHover}
//                 onClick={() => dispatch(onClickHandler())}
//             >
//                 <img className='aside__img' src={icon} alt={name}/>
//             </li>
//         )
//     }
//
//     if (name === 'phone' ) {
//         return(
//             <li
//                 className={classesHover}
//             >
//                 <a className='aside__icon-link' href="tel:+78007758187">
//                     <img className='aside__img' src={icon} alt={name}/>
//                 </a>
//             </li>
//         )
//     }
//
//     if (name === '' ) {
//         return(
//             <li className='aside__dummy'/>
//         )
//     }
//
//     return null
// }


const View = (props) => {
    const {
        dispatch,
        onClickHandler,
        onHoverHandler,
        classesHover,
        icon,
        name,
    } = props

    if (name === 'collapse' || name === 'charger' || name === 'analytics' || name === 'bugs') {
        return(
            <li
                className={classesHover}
                onClick={() => dispatch(onClickHandler())}
                onMouseEnter={() => dispatch(onHoverHandler())}
                onMouseLeave={() => dispatch(onHoverHandler())}
            >
                <img className='aside__img' src={icon} alt={name}/>
            </li>
        )
    }

    if (name === 'phone' ) {
        return(
            <li
                className={classesHover}
                onMouseEnter={() => dispatch(onHoverHandler())}
                onMouseLeave={() => dispatch(onHoverHandler())}
            >
                <a className='aside__icon-link' href="tel:+78007758187">
                    <img className='aside__img' src={icon} alt={name}/>
                </a>
            </li>
        )
    }

    if (name === '' ) {
        return(
            <li className='aside__dummy'/>
        )
    }

    return null
}