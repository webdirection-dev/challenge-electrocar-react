import {useState} from "react";
import {useSelector} from "react-redux";
import {motion, AnimatePresence} from "framer-motion";
import SelectStatusList from "./selectStatusList";
import '../select/select.scss'


const SelectStatus = () => {
    const counterStatusSelectStatus = useSelector(state => state.chargerReducer.counterStatusSelectStatus)
    const counterAllSelectStatus = useSelector(state => state.chargerReducer.counterAllSelectStatus)

    const [isToggleSelectList, setToggleSelectList] = useState(false)

    let classesToggleLocationList = 'select__actions select__actions-status'
    let classesHeader = !isToggleSelectList ? 'select__header select__header-status' : 'select__header-status select__header select__header-visible'
    let classesToggleBtns = !isToggleSelectList ? 'select__arrow' : 'select__arrow select__arrow-show'

    let classesInfo = counterStatusSelectStatus > 0 ? '' : 'select__info'

    const statusVariant = {
        hiddenStatus: {
            height: 0,
        },
        visibleStatus: {
            height: 'auto',
        },
    }

    return(
        <div className='select__location'>
            <div className={classesHeader}>
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

            <AnimatePresence>
                {
                    isToggleSelectList && (
                        <motion.div
                            className={classesToggleLocationList}
                            initial={'hiddenStatus'}
                            animate={'visibleStatus'}
                            transition={{
                                duration: 0.4,
                                type: 'tween',
                                ease: 'easeInOut'
                            }}
                            variants={statusVariant}
                            exit={'hiddenStatus'}
                        >
                            <SelectStatusList />
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default SelectStatus