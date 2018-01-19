import React, { PropTypes, Component } from 'react';

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
import BarComp from '../../components/FrequencyComp';
import Donut from '../../components/Donut';
import FrequencyFormComp from '../../components/FrequencyComp/frequencyForm';
import FrequencyLineChartComp from '../../components/FrequencyComp/frequencyLineChart';

import FrequencyTableComp from '../../components/FrequencyComp/frequencyTable';
// import FrequencyService from '../../services/frequencyService';

const style ={
  textAlign : 'right'
};
import {
    Tooltip,
    XAxis, YAxis, Area,
    CartesianGrid, AreaChart, Bar, BarChart, Line ,LineChart,
    ResponsiveContainer } from '../../vendor/recharts';
  
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
    { name: 'Facebook', abac: 4000,  amt: 2400, value: 1500,},
    { name: 'Twitter', abac: 4000,  amt: 2400, value: 600,},
    { name: 'Pantip', abac: 4000,  amt: 2400, value: 510,},
    { name: 'Others', abac: 4000,  amt: 2400, value: 118,},
  ];

  class FrequencyAnalytic extends Component {

    constructor(props){
      super(props);
      this.state = {
        keyword: '',
        keyWordErrorText: '',
        isDisabled: true
      };
    };

    getKeyWord = (val) => {
      this.setState({ keyword: val});
    };

    render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Frequency Analysis</PageHeader>
          </div>
        </div>
  
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <FrequencyFormComp callbackFromParent={this.getKeyWord}/>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-12">
                <FrequencyLineChartComp />
                
                <FrequencyTableComp callbackFromParent={this.setKeyWord} keyword={this.state.keyword}/> 
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-md-12">
                <Panel header={<span>Sources</span>} >
                  <div>
                    <Donut data={pieData} color="#3b5998" innerRadius="60" outerRadius="80" />
                  </div>
                </Panel>

                <Panel
                  header={<span>
                    <i className="fa fa-exchange fa-fw" /> Associate Terms Panel
                  </span>}
                >
                  <ListGroup>
                    <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                      Lorem
                      <span className="pull-right text-muted small">400</span>
                    </ListGroupItem>
                    <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                      Lorem
                      <span className="pull-right text-muted small">1200</span>
                    </ListGroupItem>
                    <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                    Lorem
                      <span className="pull-right text-muted small">27 </span>
                    </ListGroupItem>
                    <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                    Lorem
                      <span className="pull-right text-muted small">43</span>
                    </ListGroupItem>
                    <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                    Lorem
                      <span className="pull-right text-muted small">11</span>
                    </ListGroupItem>
                    <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                    Lorem
                      <span className="pull-right text-muted small">11</span>
                    </ListGroupItem>
                    <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                    Lorem
                      <span className="pull-right text-muted small">10</span>
                    </ListGroupItem>
                    <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                    Lorem
                      <span className="pull-right text-muted small">9</span>
                    </ListGroupItem>
                    <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                    Lorem
                      <span className="pull-right text-muted small">546</span>
                    </ListGroupItem>
                  </ListGroup>
                  <Button block>View All Terms</Button>
                </Panel>
              </div>
            </div>
          </div>
        </div>
        
          
          {/* <div className="col-lg-8">
            <Panel header={<span>Donut Chart Example</span>} >
              <div>
                <BarComp  />
              </div>
            </Panel>
          </div>  */}
        
      
      </div>
    );
  }
}

// FrequencyAnalytic.contextTypes = { setTitle: PropTypes.func.isRequired };

export default FrequencyAnalytic;