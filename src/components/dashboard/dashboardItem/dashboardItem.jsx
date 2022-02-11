const DashboardItem = (props) => {
    const {id, name, status, index} = props

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