import React, { Component } from 'react';

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
  Pagination,
} from 'react-bootstrap';

import StatWidget from '../../components/Widget';

import {
    Tooltip,
    XAxis, YAxis, Area,
    CartesianGrid, AreaChart, Bar, BarChart, Line ,LineChart,
    ResponsiveContainer } from '../../vendor/recharts';

import getConfidentialValue from '../../services/frequencyService';

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

class FrequencyLineChartComp extends Component {
//   componentDidMount(){
//     console.log('component did mount')
//     getConfidentialValue();
//   }

    render() {
        return (
            <Panel
                header={<span>
                <i className="fa fa-bar-chart-o fa-fw" /> Analysis Graph
                <div className="pull-right">
                    <DropdownButton title="Filter" bsSize="xs" pullRight id="dropdownButton2">
                    <MenuItem eventKey="1">Week</MenuItem>
                    <MenuItem eventKey="2">2 Weeks</MenuItem>
                    <MenuItem eventKey="3">3 Weeks</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Custom</MenuItem>
                    </DropdownButton>
                </div>
                </span>}
            >
                <div>
                <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <Area type="monotone" dataKey="abac" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="amt" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="value" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>
                </div>
            </Panel>
            );
        }
    
    }
    
    
export default FrequencyLineChartComp;
    