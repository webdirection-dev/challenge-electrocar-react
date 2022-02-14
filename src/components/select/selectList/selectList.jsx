import {useSelector} from "react-redux";
import SelectItem from "../selectItem";

const SelectList = () => {
    const arr1 = [1,2,3]
    const arr2 = [1,2,3,4,5,6,7]
    const arrOut = []

    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //         if (i === j) arrOut.push(arr2[j])
    //     }
    // }
    //
    // console.log(arrOut)


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