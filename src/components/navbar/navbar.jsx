import React,{ Component } from 'react';
import { Tab,Tabs} from 'react-bootstrap';
import Dashboard from '../dashboard/dashboard';
class navbar extends Component{
	render(){
		return(
			<Tabs defaultActiveKey={1} id="noanim-tab-example">
			  <Tab eventKey={1} title="Tab 1">
			    <Dashboard/>
			  </Tab>
			  <Tab eventKey={2} title="Tab 2">
			    fsfd
			  </Tab>
			</Tabs>
			
		)
	}
}

export default navbar

 