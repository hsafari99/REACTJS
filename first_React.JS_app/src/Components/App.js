import React from 'react';
import logo from '../logo.svg';
import '../Css/App.css';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';
import {without} from 'lodash';
import {findIndex} from 'lodash';

class App extends React.Component{
  constructor() {
    super();

    this.state={
      myAppointments : [],
      formDisplay    : false,
      orderBy        : "petName",
      orderDir       : "asc",
      searchText     : ''
    };

    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointments = this.addAppointments.bind(this);
    this.changeOrderBy = this.changeOrderBy.bind(this);
    this.changeOrderDir = this.changeOrderDir.bind(this);
    this.ChangeSearchSubject = this.ChangeSearchSubject.bind(this);
    this.updateAppointment = this.updateAppointment.bind(this);
  }

  componentDidMount(){
    fetch('./data.json').then(response =>response.json()).then(result =>{
      const appointments = result.map(item=>{
        return item;
      })
      this.setState({
        myAppointments: appointments
      });
    });
  }

  deleteAppointment(apt){
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts, apt);

    this.setState({myAppointments: tempApts});
  }

  toggleForm(){
    this.setState({formDisplay: !this.state.formDisplay});
  }

  addAppointments(newApt){
    let tempMyAppointments = this.state.myAppointments;
    let newId = tempMyAppointments.length + 1;
    console.log("New ID: " + newId);

    newApt.id = newId;
    tempMyAppointments.unshift(newApt);

    this.setState({
      myAppointments: tempMyAppointments
    });
  }

  changeOrderBy(selectedItem){
    this.setState({
      orderBy: selectedItem
    });
  }

  changeOrderDir(selectedDir){
    this.setState({
      orderDir: selectedDir
    });
  }

  ChangeSearchSubject(searchSubject){
    this.setState({
      searchText: searchSubject
    });
  }

  updateAppointment(title, newText, id){
    let updatedApt = this.state.myAppointments;
    let apIndex = findIndex(this.state.myAppointments, {id: id});
    updatedApt[apIndex][title] = newText;
    this.setState({
      myAppointments: updatedApt
    });
  }

  render(){

    let order;
    let filteredAppointments = this.state.myAppointments;
    if (this.state.orderDir === 'asc'){
      order = 1;
    }else{
      order = -1;
    }

    filteredAppointments = filteredAppointments.sort((a,b) => {
      if (a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()){
        return -1 * order;
      }else{
        return order;
      }
    }).filter(eachItem => {
      return(
        eachItem['petName'].toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        eachItem['ownerName'].toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        eachItem['apDate'].toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        eachItem['apNote'].toLowerCase().includes(this.state.searchText.toLowerCase())
      )
    });


    return (
      <div className="container bg-danger">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="bg-warning">
            Edit <code> src/App.js </code> 
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p className="bg-success">This is my added part </p>
          <SearchAppointments 
            orderBy={this.state.orderBy} 
            orderDir={this.state.orderDir} 
            changeOrderBy={this.changeOrderBy} 
            changeOrderDir={this.changeOrderDir} 
            ChangeSearchSubject={this.ChangeSearchSubject} 
          />
          <AddAppointments 
            formDisplay={this.state.formDisplay} 
            toggleForm={this.toggleForm} 
            addAppointments={this.addAppointments}
          />
          <ListAppointments 
            appointments={filteredAppointments} 
            deleteAppointment={this.deleteAppointment} 
            updateAppointment={this.updateAppointment}
          />
        </header>
      </div>
    );
  }
}

export default App;
