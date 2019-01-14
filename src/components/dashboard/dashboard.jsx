import React,{ Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import Dashbox from './dashbox';

class dashboard extends Component{
	render(){
		return(
			<div class="dashboard">
				<h1>Overview</h1>
				< Dashbox style= {{backgroundImage: "linear-gradient(to bottom, #23a1d1, #1f90bb)"}}  number = "10368" name = "members online" />
				< Dashbox number = "388,688" name = "items solid" />
				< Dashbox number = "1,086" name = "this week" />
				< Dashbox number = "$1,060,386" name = "total earnings" />
			</div>
		)
	}
}

export default dashboard
