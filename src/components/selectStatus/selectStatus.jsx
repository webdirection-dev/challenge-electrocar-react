import {useState} from "react";
import {useSelector} from "react-redux";
import SelectStatusList from "./selectStatusList";
import '../select/select.scss'


const SelectStatus = () => {
    const counterStatusSelectStatus = useSelector(state => state.chargerReducer.counterStatusSelectStatus)
    const counterAllSelectStatus = useSelector(state => state.chargerReducer.counterAllSelectStatus)

    const [isToggleSelectList, setToggleSelectList] = useState(false)

    let classesToggleLocationList = isToggleSelectList ? 'select__actions select__actions-status' : 'hidden'
    let classesToggleBtns = !isToggleSelectList ? 'select__arrow' : 'select__arrow select__arrow-show'

    let classesInfo = counterStatusSelectStatus > 0 ? '' : 'select__info'

    return(
        <div className='select__location'>
            <div className="select__header select__header-status">
                <div className="select__content">
                    <div className="select__name">Статус</div>
                    <div className="select__pipe">|</div>
                    <div className={classesInfo}>Выбрано {counterAllSelectStatus}</div>
                </div>

                <i
                    className={classesToggleBtns}
                    onClick={() => setToggleSelectList(!isToggleSelectList)}
                />
            </div>

            <div className={classesToggleLocationList}>
                <SelectStatusList />
            </div>
        </div>
    )
}

export default SelectStatus