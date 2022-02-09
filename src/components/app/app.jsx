import {useEffect, useState} from "react";
import Navbar from "../navbar";
import Primary from "../Primary";
import './app.css';

function App() {
    const [isHeightMain, setHeightMain] = useState(null)

    useEffect(() => {
        // componentDidMount
        const appWindow = document.querySelector('.app')

        // задать высоту окна в 100vh с нормальной работой в консоле
        let helper = document.createElement('div')
        helper.style.height = '100vh'
        appWindow.append(helper)

        // Получим высоту window
        setHeightMain(window.getComputedStyle(appWindow).height.replace(/\D/g, ''))
        helper.remove()
    }, [])

    return (
        <div
            className="app"
            style={{
                height: `${isHeightMain}px`
            }}
        >
            <Navbar />
            <Primary />
        </div>
    );
}

export default App;
