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
import getConfidentialValue from '../../services/frequencyService';


const style ={
    textAlign : 'right'
};

class FrequencyTableComp extends Component {
    constructor(props){
        super(props);
        this.state = {
           Label: '',
           Sentence:'',
           negativeResult:'',
           positiveResult:'',
           testVal:[],
           isDisabled : true
        }
    }

    componentDidMount(){
        getConfidentialValue(keyword)
        console.log(this.getConfidentialValue());
        // this.state.Label
        // // this.getConfidentialValue();
        // console.log(this.getConfidentialValue());
    }
    retrieveConfidential(val){
        getConfidentialValue(this.state.Label);    
    }

  render() {
    return (
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
                                <td className="sorting_1">{this.state.Label}</td>
                                {/* <td>{Label}</td>
                                <td>negativeResult</td>
                                <td className="center">{positiveResult}</td>
                                <td className="center">A</td> */}
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" style={style} >
                        <Pagination
                            activePage={1}
                            items={1}
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
    );
  }

}


export default FrequencyTableComp;