import {useState} from "react";

import iconSelected from '../../../icons/iconSelected.svg'
import iconUnselected from '../../../icons/iconUnselected.svg'

const SelectItem = ({id, name}) => {
    const [isSelected, setSelected] = useState(false)

    let icon = !isSelected ? iconUnselected : iconSelected
    let infoTxt = isSelected ? 'Selected ' : ''
    let classeName = isSelected ? 'select__name select__name-checked' : 'select__name'

    return(
        <div className="select__location-choice"
            onClick={() => setSelected(!isSelected)}
        >
            <img src={icon} alt={name}/>
            <h3 className={classeName}>{infoTxt}{name}</h3>
        </div>
    )
}

export default SelectItem