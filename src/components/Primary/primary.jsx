import Header from "../header";
import Charging from "./charging";
import './primary.scss'

const Primary = () => {
    return(
        <div className="primary">
            <Header />
            <Charging />
        </div>
    )
}

export default Primary