import React,{ Component } from 'react';
import {Grid,Col,Row} from 'react-bootstrap';

class dashbox extends Component{
	render(){
		return(
			<Grid>
				<Row className="show-grid">
					<Col xs={6} md ={2}>
					    <div className="dashbox1">
					    	<i class="far fa-user"></i>
					    	<h3> {this.props.number} </h3>
					    	<p> {this.props.name} </p>

					    </div>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default dashbox;