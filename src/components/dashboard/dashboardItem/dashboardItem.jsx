const DashboardItem = (props) => {
    const {
        id,
        point_id,
        state_id,
        index,

        points,
        statuses,
    } = props

    let name = ''
    let status = ''

    points.payload.forEach(item => {
        if (item.id === point_id) name = item.name
    })

    statuses.payload.forEach(item => {
        if (item.id === state_id) status = item.name
    })

    let classesDashboardItem = 'dashboard__item'
    if (index % 2 === 0) classesDashboardItem = classesDashboardItem + ' odd'

    return(
        <div className={classesDashboardItem}>
            <div className="dashboard__local">
                <h2 className="dashboard__id">{id}</h2>
                <h2 className="dashboard__location">{name}</h2>
            </div>

            <h2>{status}</h2>
        </div>
    )
}

export default DashboardItem