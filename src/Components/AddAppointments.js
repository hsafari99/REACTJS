import React, {Component} from 'react';
import {FaPlus} from 'react-icons/fa';

class AddAppointments extends Component{
	constructor(props){
		super(props);
		this.state={
			petName 	:'',
			ownerName	:'',
			apDate 		:'',
			apTime 		:'',
			apNote 		:''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChange(event){
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({[name]: value});
	}

	handleAdd(event){
		event.preventDefault();

		let tempApt = {
			petName 	: this.state.petName,
			ownerName	: this.state.ownerName,
			apNote		: this.state.apNote,
			apDate 		: this.state.apDate + " " + this.state.apTime
		};

		this.props.addAppointments(tempApt);
		this.setState({
			petName 	:'',
			ownerName	:'',
			apDate 		:'',
			apTime 		:'',
			apNote 		:''
		});

		this.props.toggleForm();
	}

	render(){
		return (
			<div className="card border border-0 px-0 mb-5 col-sm-6">
  				<div className="card-header bg-primary m-0 py-3 w-100">
  					<div className="row  bg-primary m-0 w-100">
  						<button className="col-sm-1 btn btn-primary" onClick={this.props.toggleForm}> <FaPlus/></button>
  						<h4 className="col-sm-11 text-dark text-center" onClick={this.props.toggleForm}>Add Appointment </h4>
  					</div>
  				</div>
  				<div className={'card-body bg-light text-dark px-5 py-3 ' + (this.props.formDisplay ? '':'d-none')}>
					<form id="addAppointment" className="mb-3" onSubmit={this.handleAdd} >
						<label htmlFor="petName" className="font-weight-bold font-italic">Pet Name:</label><br/>
						<input type="text" name="petName" className="w-100"  value={this.state.petName} onChange={this.handleChange}/><br/><br/>
						<label htmlFor="ownerName" className="font-weight-bold font-italic">Owner Name:</label><br/>
						<input type="text" name="ownerName" className="w-100" value={this.state.ownerName} onChange={this.handleChange} /><br/><br/>
						<label htmlFor="apNote" className="font-weight-bold font-italic">Remark:</label><br/>
						<textarea name="apNote" className="w-100" rows= "5"  value={this.state.apNote} onChange={this.handleChange}></textarea><br/><br/>
						<label htmlFor="apDate" className="font-weight-bold font-italic">Date:</label><br/>
						<input type="Date" name="apDate" className="w-100"  value={this.state.apDate} onChange={this.handleChange}/><br/><br/>
						<label htmlFor="apTime" className="font-weight-bold font-italic">Time:</label><br/>
						<input type="time" name="apTime" className="w-100"  value={this.state.apTime} onChange={this.handleChange}/><br/><br/>
						<div className="row">
							<input type="submit" id="submit" value="Submit" className=" col btn btn-success mr-2" />
							<input type="reset" id="reset" value="Reset" className=" col btn btn-danger ml-2" />
						</div>
					</form>
  				</div> 
			</div>
		);
	}
}

export default AddAppointments;