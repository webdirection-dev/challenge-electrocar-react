import PointsDb from "../../../db/pointsDb";
import SelectItem from "../selectItem";

const SelectList = () => {
    return(
        <div className="select__list">
            {
                PointsDb.payload.map(item => {
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