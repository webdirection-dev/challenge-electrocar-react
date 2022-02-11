import {useSelector} from "react-redux";
import './charging.scss'

import Select from "../../select";
import Dashboard from "../../dashboard";

const Charging = () => {
    const isToggleDesktop = useSelector(state => state.chargerReducer.isToggleDesktop)

    //classes
    if (!isToggleDesktop) {
        return(
            <div className='charging__welcome'>Пожалуйста, выберите категорию из меню...</div>
        )
    }

    return(
        <section className='charging'>
            <h1 className="charging__title">Зарядные сессии</h1>

            <div className="select">
                <Select />
                <Select />
            </div>

            <Dashboard />
        </section>
    )
}

export default Charging