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
                    rise: true,
                    id: 1,
                },
                {
                    name: 'Anna D.',
                    salary: 8000,
                    increase: true,
                    rise: false,
                    id: 2,
                },
                {
                    name: 'San D.',
                    salary: 4500,
                    increase: false,
                    rise: false,
                    id: 3,
                },
            ],
            term: '',
            filter: 'all',
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addPerson = (name, salary) => {
        const newPerson = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        }
        this.setState(({data}) => {
            const newArr = [...data, newPerson];
            return {
                data: newArr,
            }

        })
        console.log(this.state.data)
    }

    onToggleIncrease = (id) => {
       this.setState(({data}) =>({
           //возвращаем новый массив
           data: data.map(item => {
               if(item.id === id){
                   //новый обьект
                   return {...item, increase: !item.increase}
               }
               //иначе возвращаем старый массив
               return item;
           })
       }) )
    }

    onToggleRise = (id) => {
        this.setState(({data}) =>({
            //возвращаем новый массив
            data: data.map(item => {
                if(item.id === id){
                    //новый обьект
                    return {...item, rise: !item.rise}
                }
                //иначе возвращаем старый массив
                return item;
            })
        }) )
    }

    searchEmp = (items, term) => {
        //строка отображающая поиск ничего не содержит
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            //кусок строки item.name находим
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterSelected = (items, filter) => {
        switch(filter){
            case 'rise':
                return items.filter(item => item.rise);
            case 'morethan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilter = (filter) =>{
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterSelected(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}></AppInfo>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}></SearchPanel>
                    <AppFilter filter={filter} onFilter={this.onFilter}></AppFilter>
                </div>

                <EmployersList
                                data={visibleData}
                               onDelete={this.deleteItem}
                                onToggleIncrease={this.onToggleIncrease}
                                onToggleRise={this.onToggleRise}></EmployersList>

                <EmployersAddForm onAdd={this.addPerson}></EmployersAddForm>
            </div>
        );
    }
}

export default App;