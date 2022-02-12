import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchSessions, fetchPoints, fetchStatuses} from "../../store/chargerSlice";

import Navbar from "../navbar";
import Primary from "../Primary";
import './app.css';

function App() {
    const dispatch = useDispatch()
    // const [isHeightMain, setHeightMain] = useState(null)
    // useEffect(() => {
    //     // componentDidMount
    //     const appWindow = document.querySelector('.app')
    //
    //     // задать высоту окна в 100vh с нормальной работой в консоле
    //     let helper = document.createElement('div')
    //     helper.style.height = '100vh'
    //     appWindow.append(helper)
    //
    //     // Получим высоту window
    //     setHeightMain(window.getComputedStyle(appWindow).height.replace(/\D/g, ''))
    //     helper.remove()
    // }, [])

    // componentDidMount
    useEffect(() => {
        dispatch(fetchSessions())
        dispatch(fetchPoints())
        dispatch(fetchStatuses())
    }, [dispatch])

    return (
        <div
            className="app"
            // style={{
            //     height: `${isHeightMain}px`
            // }}
        >
            <Navbar />
            <Primary />
        </div>
    );
}

export default App;
