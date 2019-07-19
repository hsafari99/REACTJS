import React, {Component} from 'react'

class SearchAppointments extends Component{

	render(){
		return(
			<div className="col-sm-8 py-5 px-3 my-5 bg-primary">
				<form id="searchAppointment">
					<input 
						type="text" 
						placeholder="Search..." 
						name="searchBar"  
						className="mr-2 p-2" 
						onChange={e=> this.props.ChangeSearchSubject(e.target.value)} /> in:
					<select name="orderBy" 
						className="bg-info p-2 ml-2"
						onChange={e => this.props.changeOrderBy(e.target.value)} >
			    		<option 
			    			value="petName" 
			    			className={this.props.orderBy === "petName" ? 'bg-success':''} >Pet Name
			    		</option>
			    		<option 
			    			value="ownerName" 
			    			className={this.props.orderBy==="ownerName" ? 'bg-success':''} >Owner Name
			    		</option>
			    		<option 
			    			value="apDate" 
			    			className={this.props.orderBy==="apDate" ? 'bg-success':''} >Date/ Time
			    		</option>
			    		<option 
			    			value="apNote" 
			    			className={this.props.orderBy==="apNote" ? 'bg-success':''} >Remark
			    		</option>
					</select>
					<select 
						name="orderDir" 
						className="bg-info p-2 ml-2"
						onChange={e => this.props.changeOrderDir(e.target.value)} >
			    		<option 
			    			value="asc" 
			    			className={this.props.orderDir === "asc" ? 'bg-secondary': ''} >Ascending
			    		</option>
			    		<option 
			    			value="desc" 
			    			className={this.props.orderDir === "desc" ? 'bg-secondary': ''} >Descending
			    		</option>
					</select>
				</form>
			</div>
		);
	}
}

export default SearchAppointments;