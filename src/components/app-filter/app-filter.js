import './app-filter.css'

const AppFilter = (props) => {

    const buttonsData = [
        {name:'all', label: 'Все сотрудники'},
        {name:'rise', label: 'На повышение'},
        {name:'morethan1000', label: 'з/п больше 1000$'},
    ];

    const btns = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? " btn-light" : "btn-outline-light";
        return (
            <button className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilter(name)}
                    type="button"> {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}

export default AppFilter;