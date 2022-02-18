import Header from "../header";
import Charging from "./charging";
import CallBackBtn from "../callBack/callBackBtn";
import './primary.scss'

const Primary = () => {
    return(
        <div className="primary">
            <Header />
            <Charging />
            <CallBackBtn />
        </div>
    )
}

export default Primary