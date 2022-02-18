import {useSelector} from "react-redux";
import SelectItem from "../selectItem";

const SelectList = () => {
    const isInput = useSelector(state => state.chargerReducer.isInput)
    const pointsDbTest = useSelector(state => state.chargerReducer.pointsDbTest)

    let arr = []

    if (isInput.length > 0) {
        pointsDbTest.payload.forEach(item => {
            if (item.name.toLowerCase().indexOf(isInput.toLowerCase()) > -1) arr.push(item)
        })
    } else arr = pointsDbTest.payload

    return(
        <div className="select__list">
            {
                arr.map(item => {
                    return(
                        <SelectItem
                            key={String(Math.random() * item.id)}
                            {...item}
                        />
                    )
                })
            }
        </div>
    )
}

export default SelectList