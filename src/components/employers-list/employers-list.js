import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data}) => {
    const elements = data.map(info => {
        const {id, ...infoProps} = info;

        return (
            <EmployersListItem key={id} {...infoProps}></EmployersListItem>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;