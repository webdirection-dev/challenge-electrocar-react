import './status.scss'
const Status = ({status}) => {
    let classes = 'status'
    if (status === 'Завершена') classes += ' bgBlue'

    return(
        <div className={classes}>{status}</div>
    )
}

export default Status