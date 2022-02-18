import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchSessions, fetchPoints, fetchStatuses} from "../../store/chargerSlice";

import Navbar from "../navbar";
import Primary from "../Primary";
import Modal from "../modal";
import './app.css';

function App() {
    const dispatch = useDispatch()

    // componentDidMount
    useEffect(() => {
        dispatch(fetchSessions())
        dispatch(fetchPoints())
        dispatch(fetchStatuses())
    }, [dispatch])

    return (
        <div className="app">
            <Navbar />
            <Primary />
            <Modal />
        </div>
    );
}

export default App;
