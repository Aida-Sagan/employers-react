import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter  from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

function App() {

    const data = [
        {
            name: 'David D.',
            salary: 500,
            increase: false,
        },
        {
            name: 'Anna D.',
            salary: 8000,
            increase: true,
        },
        {
            name: 'San D.',
            salary: 4500,
            increase: false,
        },
    ];


    return (
        <div className="app">
            <AppInfo></AppInfo>

            <div className="search-panel">
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>
            </div>

            <EmployersList data={data}></EmployersList>

            <EmployersAddForm></EmployersAddForm>
        </div>
    );
}

export default App;