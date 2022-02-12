import {useSelector} from "react-redux";
import SessionsDb from "../../db/sessionsDb";
import PointsDb from "../../db/pointsDb";
import StatesDb from "../../db/statesDb";

import './dashboard.scss'
import DashboardItem from "./dashboardItem";

const Dashboard = () => {
    const {responseStatus, responseError, sessionsData} = useSelector(state => state.chargerReducer)
    // console.log(sessionsData)
    const {responseStatusPoints, responseErrorPoints, pointsData} = useSelector(state => state.chargerReducer)
    // console.log(pointsData)
    // console.log(responseStatusPoints)
    // console.log(responseErrorPoints)

    const {responseStatusStatuses, responseErrorStatuses, statusesData} = useSelector(state => state.chargerReducer)
    // console.log(statusesData)
    // console.log(responseStatusStatuses)
    // console.log(responseErrorStatuses)

    return(
        <>
            {responseStatus === 'loading' && <h2>Загрузка...</h2>}

            {(responseError && sessionsData.length === 0) && <h2>Произошла ошибка: {responseError}</h2>}

            {/*Заглушка при ошибке Cross-Origin Request*/}
            {sessionsData.length === 0 &&
                <div className="dashboard">
                    <div className="dashboard__head">
                        <div className="dashboard__local">
                            <h2 className="dashboard__id">ID</h2>
                            <h2 className="dashboard__location">Локация</h2>
                        </div>

                        <h2 className="dashboard__status">Статус</h2>
                    </div>

                    <div className="dashboard__list">
                        {
                            SessionsDb.payload.map((item, index) => {
                                return(
                                    <DashboardItem
                                        key={String(Math.random() * item.id)}
                                        index={index}
                                        points={PointsDb}
                                        statuses={StatesDb}
                                        {...item}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            }

            {/*Реальные данные с сервера*/}
            {sessionsData.length > 0 &&
                <div className="dashboard">
                    <div className="dashboard__head">
                        <div className="dashboard__local">
                            <h2 className="dashboard__id">ID</h2>
                            <h2 className="dashboard__location">Локация</h2>
                        </div>

                        <h2 className="dashboard__status">Статус</h2>
                    </div>

                    <div className="dashboard__list">
                        {
                            sessionsData.payload.map((item, index) => {
                                return(
                                    <DashboardItem
                                        key={String(Math.random() * item.id)}
                                        index={index}
                                        points={pointsData}
                                        statuses={statusesData}
                                        {...item}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Dashboard