import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {pushStatusParam, transformLocalStatus, filterLocal} from "../../../store/chargerSlice";

import iconSelected from '../../../icons/iconSelected.svg'
import iconUnselected from '../../../icons/iconUnselected.svg'

const SelectStatusItem = ({id, name, selectStatus}) => {
    const status_idsParams = useSelector(state => state.chargerReducer.status_idsParams)
    const points_idsParams = useSelector(state => state.chargerReducer.points_idsParams)
    const dispatch = useDispatch()

    const [isSearchParams, setSearchParams] = useSearchParams()

    const handlerSelected = (event) => {
        event.preventDefault()

        dispatch(pushStatusParam({status_ids: id}))
        dispatch(transformLocalStatus({status_ids: id}))
        dispatch(filterLocal())
    }

    // componentDidUpdate
    useEffect(() => {
        //Управление строкой URL
        const idsPoints = [...points_idsParams].sort((a, b) => a-b)
        const idsStatus = [...status_idsParams].sort((a, b) => a-b)

        setSearchParams({
            points_ids: idsPoints,
            status_ids: idsStatus,
        })

        // eslint-disable-next-line
    }, [status_idsParams, points_idsParams])

    let icon = !selectStatus ? iconUnselected : iconSelected
    let infoTxt = selectStatus ? 'Selected ' : ''
    let classesName = selectStatus ? 'select__name select__name-checked' : 'select__name'

    return(
        <div className="select__location-choice"
             onClick={(event) => handlerSelected(event)}
        >
            <img src={icon} alt={name}/>
            <h3 className={classesName}>{infoTxt}{name}</h3>
        </div>
    )
}

export default SelectStatusItem