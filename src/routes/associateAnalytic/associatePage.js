import React, { PropTypes } from 'react';

import {
  MenuItem,
  DropdownButton,
  Panel, 
  PageHeader, 
  ListGroup, 
  ListGroupItem, 
  Button,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  InputGroupAddon,
  Pagination,
} from 'react-bootstrap';

import StatWidget from '../../components/Widget';
import BarComp from '../../components/FrequencyComp';
import Donut from '../../components/Donut'

import {
    Tooltip,
    XAxis, YAxis, Area,
    CartesianGrid, AreaChart, Bar, BarChart, Line ,LineChart,
    ResponsiveContainer } from '../../vendor/recharts';

const style ={
    textAlign : 'center',
    marginTop : '25px'
    };

  const title = 'Sb Admin React';
  
  const data = [
        { name: 'Jan 1', abac: 4000,  amt: 2400, value: 600,},
        { name: 'Jan 2', abac: 3000,  amt: 2210, value: 300 },
        { name: 'Jan 3', abac: 2000,  amt: 2290, value: 500 },
        { name: 'Jan 4', abac: 2780,  amt: 2000, value: 400 },
        { name: 'Jan 5', abac: 1890,  amt: 2181, value: 200 },
        { name: 'Jan 6', abac: 2390,  amt: 2500, value: 700 },
        { name: 'Jan 7', abac: 3490,  amt: 2100, value: 100 },
        { name: 'Jan 8', abac: 4000,  amt: 2400, value: 600,},
        { name: 'Jan 9', abac: 3000,  amt: 2210, value: 300 },
        { name: 'Jan 10', abac: 2000,  amt: 2290, value: 500 },
        { name: 'Jan 11', abac: 2780,  amt: 2000, value: 400 },
        { name: 'Jan 12', abac: 890,  amt: 2181, value: 200 },
        { name: 'Jan 13', abac: 390,  amt: 2500, value: 700 },
        { name: 'Jan 14', abac: 3490,  amt: 2100, value: 100 },
  ];

  const pieData =[
    { name: 'Facebook', abac: 4000,  amt: 2400, value: 2300,},
    { name: 'Twitter', abac: 4000,  amt: 2400, value: 600,},
    { name: 'Pantip', abac: 4000,  amt: 2400, value: 510,},
    { name: 'Others', abac: 4000,  amt: 2400, value: 118,},
  ];

function AssociateAnalytic(props, context) {
    context.setTitle(title);
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <PageHeader>Associate Analysis</PageHeader>
                </div>
            </div>
    
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <Panel header={<span>Associate Form</span>}>
                        <Form>
                        <div className="row">
                            <div className="col-lg-offset-1 col-lg-3">
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>See how often you have been talked about</ControlLabel>
                                <FormControl
                                type="text"
                                placeholder="input keyword"
                                required
                                />
                            </FormGroup>
                            </div>
                            <div className="col-lg-1" style={style}>
                            <ControlLabel><span className="fa fa-exchange"  ></span></ControlLabel>
                            </div>
                            <div className="col-lg-3">
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Association</ControlLabel>
                                <FormControl
                                type="text"
                                placeholder="input keyword"
                                readOnly
                                required
                                />
                                
                            </FormGroup>
                            </div>
                            <div className="col-lg-3">
                            <FormGroup controlId="formControlsSelectMultiple">
                                <ControlLabel>Select correlation</ControlLabel>
                                <FormControl componentClass="select" multiple>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup >
                                <Button bsStyle="primary" width="100%" type="submit" >Search </Button>
                                {'  '}
                                <Button type="reset">Reset Button</Button>
                            </FormGroup>
                            </div>
                        </div>
                        </Form>
                    </Panel>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <Panel header={<span>Associate Chart</span>} >
                    <div>
                    <ResponsiveContainer width="100%" aspect={4}>
                        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="abac" stroke="#8884d8" />
                        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="amt" stroke="#ffc658" />
                        </LineChart>
                    </ResponsiveContainer>
                    </div>
                </Panel>
                </div>
            </div>
        </div>
    );
}

AssociateAnalytic.contextTypes = { setTitle: PropTypes.func.isRequired };

export default AssociateAnalytic;