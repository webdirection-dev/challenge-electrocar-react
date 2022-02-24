import {useDispatch} from "react-redux";
import {pushPointsParam, transformLocalPoints, filterLocal, changeInput} from "../../../store/chargerSlice";

import iconSelected from '../../../icons/iconSelected.svg'
import iconUnselected from '../../../icons/iconUnselected.svg'

const SelectItem = ({id, name, selectStatus}) => {
    const dispatch = useDispatch()

    const handlerSelected = (event) => {
        event.preventDefault()

        dispatch(pushPointsParam({points_ids: id}))
        dispatch(transformLocalPoints({points_ids: id}))
        dispatch(filterLocal())
        dispatch(changeInput({input: ''}))
    }

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