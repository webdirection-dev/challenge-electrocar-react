import {useSelector} from "react-redux";
import SelectStatusItem from "../selectStatusItem";

const SelectStatusList = () => {
    const statusDbTest = useSelector(state => state.chargerReducer.statusDbTest)

    return(
        <div className="select__list">
            {
                statusDbTest.payload.map(item => {
                    return(
                        <SelectStatusItem
                            key={String(Math.random() * item.id)}
                            {...item}
                        />
                    )
                })
            }
        </div>
    )
}

export default SelectStatusList