import './dashboard.scss'
import DashboardItem from "./dashboardItem";

const test = [
    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },

    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },

    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },

    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },

    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },

    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },

    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },

    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },

    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },

    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },

    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },

    {
        id: 12250,
        name:'Парковка парка «Южные культуры»',
        status: 'Идёт зарядка',
    },
]

const Dashboard = () => {
    return(
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
                    test.map((item, index) => {
                        return(
                            <DashboardItem
                                key={String(Math.random() * item.id)}
                                index={index}
                                {...item}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard