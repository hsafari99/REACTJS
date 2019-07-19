import React, {Component} from 'react';
import {FaBattleNet} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointments extends Component{

	render(){
		return(
			<div className="container bg-success">
				{this.props.appointments.map(item=>(
					<div className="border rounded p-4 text-dark mb-4" key={item.id}>
						<h4 
							className="text-center">
							<span 
								contentEditable 
								suppressContentEditableWarning 
								onBlur={e => this.props.updateAppointment("petName", e.target.innerText, item.id)} 
							> 
								{item.petName} 
							</span>
						</h4>
						<span>
							<b>
								Owner Name:
							</b>
							<span 
								contentEditable 
								suppressContentEditableWarning
								onBlur={e => this.props.updateAppointment("ownerName", e.target.innerText, item.id)}

							>
								{item.ownerName}
							</span>
						</span>
						<p>
							<b>
								Remarks:
							</b>
							<span 
								contentEditable 
								suppressContentEditableWarning
								onBlur={e => this.props.updateAppointment("apNote", e.target.innerText, item.id)}
							> 
								{item.apNote} 
							</span>
						</p>
						<p>
							<b>
								Date:
							</b>
							<FaBattleNet/> 
							<Moment 
								date={item.apDate}
								parse="YYYY-MM-dd hh:mm"
								format="MMM-DD-YYYY h:mma" /></p>
						<button 
							className="bg bg-danger bg-round p-2" 
							onClick={()=> this.props.deleteAppointment(item)}
						>
							<FaTimes className="text-dark"/> 
							Click to Remove from the List
						</button>
					</div>
				))}
			</div>
		)
	}
}


export default ListAppointments;