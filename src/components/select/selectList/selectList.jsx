import {useSelector} from "react-redux";
import SelectItem from "../selectItem";

const SelectList = () => {
    const pointsDbTest = useSelector(state => state.chargerReducer.pointsDbTest)
    return(
        <div className="select__list">
            {
                pointsDbTest.payload.map(item => {
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