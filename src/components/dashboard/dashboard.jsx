import {useSelector} from "react-redux";
// import SessionsDb from "../../db/sessionsDb";
import PointsDb from "../../db/pointsDb";
import StatesDb from "../../db/statesDb";

import './dashboard.scss'
import DashboardItem from "./dashboardItem";

const Dashboard = () => {
    const {sessionsDbTest} = useSelector(state => state.chargerReducer)

    const {responseStatus, responseError, sessionsData} = useSelector(state => state.chargerReducer)
    const {responseStatusPoints, responseErrorPoints, pointsData} = useSelector(state => state.chargerReducer)
    const {responseStatusStatuses, responseErrorStatuses, statusesData} = useSelector(state => state.chargerReducer)

    return(
        <>
            {responseStatus === 'loading' && <h2>Загрузка...</h2>}

            {(responseError && sessionsData.payload.length === 0) && <h2 className='error'>Произошла ошибка: {responseError}</h2>}

            {/*Заглушка при ошибке Cross-Origin Request*/}
            {sessionsData.payload.length === 0 &&
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
                            sessionsDbTest.payload.map((item, index) => {
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
            {sessionsData.payload.length > 0 &&
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