import React,{ Component } from 'react';
import { Tab } from 'react-bootstrap';

class navbare extends Component{
	render(){
		return(
			<Tabs defaultActiveKey={1} id="noanim-tab-example">
			  <Tab eventKey={1} title="Tab 1">
			    Dashboard
			  </Tab>
			</Tabs>;
		)
	}
}

export default navbare