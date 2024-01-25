import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleRise,onToggleIncrease}) => {
    const elements = data.map(info => {
        const {id, ...infoProps} = info;

        return (
            <EmployersListItem
                key={id}
                {...infoProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)} ></EmployersListItem>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;