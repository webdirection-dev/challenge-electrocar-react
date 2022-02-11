import './select.scss'

const Select = () => {
    return(
        <div className="select__item">
            <div className="select__content">
                <div className="select__name">Локация</div>
                <div className="select__pipe">|</div>
                <div className="select__info"> Выбрано 0</div>
            </div>

            <i className="select__arrow" />
        </div>
    )
}

export default Select