import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data}) => {
    const elements = data.map(info => {
        return (
            <EmployersListItem {...info}></EmployersListItem>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;