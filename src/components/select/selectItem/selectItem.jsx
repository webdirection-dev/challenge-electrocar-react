import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {pushPointsParam, transformLocalPoints, filterLocalPoints} from "../../../store/chargerSlice";

import iconSelected from '../../../icons/iconSelected.svg'
import iconUnselected from '../../../icons/iconUnselected.svg'

const SelectItem = ({id, name, selectStatus}) => {
    const points_idsParams = useSelector(state => state.chargerReducer.points_idsParams)
    const dispatch = useDispatch()

    const [isSearchParams, setSearchParams] = useSearchParams()
    const pointsQuery = isSearchParams.get('points_ids') || ''

    const handlerSelected = (event) => {
        event.preventDefault()

        dispatch(pushPointsParam({points_ids: id}))
        dispatch(transformLocalPoints({points_ids: id}))
        dispatch(filterLocalPoints())
    }

    // componentDidUpdate
    useEffect(() => {
        //Управление строкой URL
        setSearchParams({points_ids: [...points_idsParams]})
        // eslint-disable-next-line
    }, [points_idsParams])

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

export default SelectItem