import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Dashboard from './components/dashboard/dashboard';
import Charts from './components/tab/charts';
import Tables from './components/tab/tables';
import Forms from './components/tab/forms';
import Todo from './components/tab/todo';
import Mail from './components/tab/mail';
import Contacts from './components/tab/contacts';
import Documentation from './components/tab/documentation';
import { Tab, Row, Col, Nav,NavItem } from 'react-bootstrap';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
    	//using bootstrap grid as my main page where first 4 is side bar and rest 8 is where we show its component
    		<div className = "main">
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				  <Row className="clearfix">
				    <Col xsHidden sm={4}>
				      <img src = "https://res.cloudinary.com/dpy0mkwsp/image/upload/v1547354763/CHMimage/saas.svg"/>
				      <Nav bsStyle="pills" stacked>
				        <NavItem eventKey="1">Dashboard
				        </NavItem>
				        <NavItem eventKey="2">Charts</NavItem>
				        <NavItem eventKey="3">Tables</NavItem>
				        <NavItem eventKey="4">Forms</NavItem>
				        <NavItem eventKey="5">Todo</NavItem>
				        <NavItem eventKey="6">Mail</NavItem>
				        <NavItem eventKey="7">Contacts</NavItem>
				      </Nav>
				    </Col>
				    <Col sm={8}>
					  <Navbar/>
				      <Tab.Content animation>
				        <Tab.Pane eventKey="1">
				        	< Dashboard/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="2">
				       		<Charts/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="3">
				       		<Tables/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="4">
				       		<Forms/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="5">
				       		<Todo/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="6">
				       		<Mail/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="7">
				       		<Contacts/>
				        </Tab.Pane>
				        <Tab.Pane eventKey="8">
				       		<Documentation/>
				        </Tab.Pane>
				      </Tab.Content>
				    </Col>
				  </Row>
				</Tab.Container>
			</div>
    );
  }
}

export default App;
