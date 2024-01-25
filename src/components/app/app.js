import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter  from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'David D.',
                    salary: 500,
                    increase: false,
                    id: 1,
                },
                {
                    name: 'Anna D.',
                    salary: 8000,
                    increase: true,
                    id: 2,
                },
                {
                    name: 'San D.',
                    salary: 4500,
                    increase: false,
                    id: 3,
                },
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo></AppInfo>

                <div className="search-panel">
                    <SearchPanel></SearchPanel>
                    <AppFilter></AppFilter>
                </div>

                <EmployersList data={data}
                               onDelete={this.deleteItem}></EmployersList>

                <EmployersAddForm></EmployersAddForm>
            </div>
        );
    }
}

export default App;