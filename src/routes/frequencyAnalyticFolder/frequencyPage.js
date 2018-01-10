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
  Pagination,
} from 'react-bootstrap';

import StatWidget from '../../components/Widget';
import BarComp from '../../components/FrequencyComp';
import Donut from '../../components/Donut';
import FrequencyFormComp from '../../components/FrequencyComp/frequencyForm';
import FrequencyLineChartComp from '../../components/FrequencyComp/frequencyLineChart';
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

  function FrequencyAnalytic(props, context) {
    context.setTitle(title);
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Frequency Analysis</PageHeader>
          </div>
        </div>
  
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <FrequencyFormComp  />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-12">
                <FrequencyLineChartComp />
                {/* Data Grid */}
                <Panel header={<span>Data Table</span>} >
                  <div>
                    <div className="dataTable_wrapper">
                      <div
                        id="dataTables-example_wrapper"
                        className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                      >

                        <div className="row">
                          <div className="col-sm-9">
                            <div className="dataTables_length" id="dataTables-example_length">
                              <label htmlFor={'show'}> Show
                                <select
                                  name="dataTables-example_length"
                                  aria-controls="dataTables-example"
                                  className="form-control input-sm"
                                  id="show"
                                >
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                </select>
                                entries
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div id="dataTables-example_filter"  className="dataTables_filter">
                              <label  htmlFor={'search'}>Search:
                                <input
                                  type="search"
                                  className="form-control input-sm"
                                  placeholder=""
                                  aria-controls="dataTables-example"
                                  id="search"
                                  
                                />
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12">
                            <table
                              className="table table-striped table-bordered table-hover dataTable no-footer"
                              id="dataTables-example"
                              role="grid"
                              aria-describedby="dataTables-example_info"
                            >
                              <thead>
                                <tr role="row">
                                  <th
                                    className="sorting_asc"
                                    tabIndex="0"
                                    aria-controls="dataTables-example"
                                    rowSpan="1"
                                    colSpan="1"
                                    aria-label="Rendering engine: activate to sort column descending"
                                    aria-sort="ascending"
                                    style={{ width: 265 }}
                                  >
                                  No
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex="0"
                                    aria-controls="dataTables-example"
                                    rowSpan="1"
                                    colSpan="1"
                                    aria-label="Browser: activate to sort column ascending"
                                    style={{ width: 321 }}
                                  >
                                  Message
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex="0"
                                    aria-controls="dataTables-example"
                                    rowSpan="1"
                                    colSpan="1"
                                    aria-label="Platform(s): activate to sort column ascending"
                                    style={{ width: 299 }}
                                  >
                                  Source
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex="0"
                                    aria-controls="dataTables-example"
                                    rowSpan="1"
                                    colSpan="1"
                                    aria-label="Engine version: activate to sort column ascending"
                                    style={{ width: 231 }}
                                  >
                                  Conf +/-
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex="0"
                                    aria-controls="dataTables-example"
                                    rowSpan="1"
                                    colSpan="1"
                                    aria-label="CSS grade: activate to sort column ascending"
                                    style={{ width: 180 }}
                                  >Label
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="gradeA odd" role="row">
                                  <td className="sorting_1">Gecko</td>
                                  <td>Firefox 1.0</td>
                                  <td>Win 98+ / OSX.2+</td>
                                  <td className="center">1.7</td>
                                  <td className="center">A</td>
                                </tr>
                                <tr className="gradeA even" role="row">
                                  <td className="sorting_1">Gecko</td>
                                  <td>Firefox 1.5</td>
                                  <td>Win 98+ / OSX.2+</td>
                                  <td className="center">1.8</td>
                                  <td className="center">A</td>
                                </tr>
                                <tr className="gradeA odd" role="row">
                                  <td className="sorting_1">Gecko</td>
                                  <td>Firefox 2.0</td>
                                  <td>Win 98+ / OSX.2+</td>
                                  <td className="center">1.8</td>
                                  <td className="center">A</td>
                                </tr>
                                <tr className="gradeA even" role="row">
                                  <td className="sorting_1">Gecko</td>
                                  <td>Firefox 3.0</td>
                                  <td>Win 2k+ / OSX.3+</td>
                                  <td className="center">1.9</td>
                                  <td className="center">A</td>
                                </tr>
                                <tr className="gradeA odd" role="row">
                                  <td className="sorting_1">Gecko</td>
                                  <td>Camino 1.0</td>
                                  <td>OSX.2+</td>
                                  <td className="center">1.8</td>
                                  <td className="center">A</td>
                                </tr>
                                <tr className="gradeA even" role="row">
                                  <td className="sorting_1">Gecko</td>
                                  <td>Camino 1.5</td>
                                  <td>OSX.3+</td>
                                  <td className="center">1.8</td>
                                  <td className="center">A</td>
                                </tr>
                                <tr className="gradeA odd" role="row">
                                  <td className="sorting_1">Gecko</td>
                                  <td>Netscape 7.2</td>
                                  <td>Win 95+ / Mac OS 8.6-9.2</td>
                                  <td className="center">1.7</td>
                                  <td className="center">A</td>
                                </tr>
                                <tr className="gradeA even" role="row">
                                  <td className="sorting_1">Gecko</td>
                                  <td>Netscape Browser 8</td>
                                  <td>Win 98SE+</td>
                                  <td className="center">1.7</td>
                                  <td className="center">A</td>
                                </tr>
                                <tr className="gradeA odd" role="row">
                                  <td className="sorting_1">Gecko</td>
                                  <td>Netscape Navigator 9</td>
                                  <td>Win 98+ / OSX.2+</td>
                                  <td className="center">1.8</td>
                                  <td className="center">A</td>
                                </tr>
                                <tr className="gradeA even" role="row">
                                  <td className="sorting_1">Gecko</td>
                                  <td>Mozilla 1.0</td>
                                  <td>Win 95+ / OSX.1+</td>
                                  <td className="center">1</td>
                                  <td className="center">A</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12" style={style} >
                            <Pagination
                              activePage={1}
                              items={6}
                              first
                              last
                              prev
                              next
                              onSelect={() => {
                                // function for Pagination
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Panel>
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

FrequencyAnalytic.contextTypes = { setTitle: PropTypes.func.isRequired };

export default FrequencyAnalytic;