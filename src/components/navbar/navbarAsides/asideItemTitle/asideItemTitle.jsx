import {useSelector, useDispatch} from "react-redux";
import {
    toggleNavbar,
    toggleDesktop,
    showWarning,
    handlerHoverAnalytics,
    handlerHoverToggleNav,
    handlerHoverCharger,
    handlerHoverPhone,
    handlerHoverBugs,
} from "../../../../store/chargerSlice";

import arrLeft from "../../../../icons/iconArrLeft.svg";
import arrRight from "../../../../icons/iconArrRight.svg";
import iconCharger from '../../../../icons/iconCharger.svg'
import iconAnalytics from '../../../../icons/iconAnalytics.svg'
import iconPhone from '../../../../icons/iconPhone.svg'
import iconBug from '../../../../icons/iconBug.svg'

const AsideItemTitle = (props) => {
    const {
        name,
        title,
    } = props

    const isHoverToggleNav = useSelector(state => state.chargerReducer.isHoverToggleNav)
    const isHoverCharger = useSelector(state => state.chargerReducer.isHoverCharger)
    const isHoverAnalytics = useSelector(state => state.chargerReducer.isHoverAnalytics)
    const isHoverPhone = useSelector(state => state.chargerReducer.isHoverPhone)
    const isHoverBugs = useSelector(state => state.chargerReducer.isHoverBugs)

    const isToggleNavbar = useSelector(state => state.chargerReducer.isToggleNavbar)
    // const isToggleDesktop = useSelector(state => state.chargerReducer.isToggleDesktop)
    const dispatch = useDispatch()

    const onClickHandler = (name === 'collapse') ? toggleNavbar : (name === 'charger') ? toggleDesktop : showWarning

    //Hover
    let onHoverHandler = Function.prototype
    if (name === 'collapse') onHoverHandler = handlerHoverToggleNav
    if (name === 'charger') onHoverHandler = handlerHoverCharger
    if (name === 'analytics') onHoverHandler = handlerHoverAnalytics
    if (name === 'phone') onHoverHandler = handlerHoverPhone
    if (name === 'bugs') onHoverHandler = handlerHoverBugs

    let classesHover = 'aside__title'
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
            title={title}
            name={name}
        />
    )
}

export default AsideItemTitle
//
// const View = (props) => {
//     const {
//         dispatch,
//         onClickHandler,
//         classesHover,
//         title,
//         name,
//     } = props
//
//     if (name === 'collapse') {
//         return(
//             <li
//                 className={classesHover}
//                 onClick={() => {
//                     dispatch(onClickHandler())
//                 }}
//             > {title}</li>
//         )
//     }
//
//     if (name === 'charger' || name === 'analytics' || name === 'bugs') {
//         return(
//             <li
//                 className={classesHover}
//                 onClick={() => dispatch(onClickHandler())}
//             >
//                 <img src={iconBug} alt="..."/>
//                 {title}
//             </li>
//         )
//     }
//
//     if (name === 'phone' ) {
//         return(
//             <li
//                 className={classesHover}
//             >
//                 <a className='aside__title-link' href="tel:+78007758187">
//                     {title}
//                 </a>
//             </li>
//         )
//     }
//
//     if (name === '' ) {
//         return(
//             <li className='aside__dummy aside__dummy-title'/>
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
        title,
        name,
    } = props

    if (name === 'collapse') {
        return(
            <li
                className={classesHover}
                onClick={() => {
                    dispatch(onHoverHandler())
                    dispatch(onClickHandler())
                }}
                onMouseEnter={() => dispatch(onHoverHandler())}
                onMouseLeave={() => dispatch(onHoverHandler())}
            > {title}</li>
        )
    }

    if (name === 'charger' || name === 'analytics' || name === 'bugs') {
        return(
            <li
                className={classesHover}
                onClick={() => dispatch(onClickHandler())}
                onMouseEnter={() => dispatch(onHoverHandler())}
                onMouseLeave={() => dispatch(onHoverHandler())}
            > {title}</li>
        )
    }

    if (name === 'phone' ) {
        return(
            <li
                className={classesHover}
                onMouseEnter={() => dispatch(onHoverHandler())}
                onMouseLeave={() => dispatch(onHoverHandler())}
            >
                <a className='aside__title-link' href="tel:+78007758187">
                    {title}
                </a>
            </li>
        )
    }

    if (name === '' ) {
        return(
            <li className='aside__dummy aside__dummy-title'/>
        )
    }

    return null
}