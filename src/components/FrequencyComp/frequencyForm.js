import React, { Component } from 'react';

import {
    Panel, 
    ListGroup, 
    ListGroupItem, 
    Button,
    ControlLabel,
    FormControl,
    HelpBlock,
    FormGroup,
    Form,
    InputGroup,
  } from 'react-bootstrap';
import getConfidentialValue from '../../services/frequencyService';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';

class FrequencyFormComp extends Component {
    constructor(props){
        super(props);
        this.state = {
           keyword: '',
           keyWordErrorText:'',
           isDisabled : true
        };
    }
    submitKeyword(e, val) {
        this.props.callbackFromParent(this.state.keyword);
    }

    setKeyWord = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }
    render() {
        return (
            <Panel header={<span>Frequence Form</span>}>
                <Form>
                <div className="row">
                <div className="col-lg-offset-3 col-lg-6">
                    <FormGroup
                    controlId="keywordTxt"
                    
                    >
                    <ControlLabel>See how often you have been talked about</ControlLabel>
                    <FormControl
                        itemID="frequencyTxt"
                        type="text"
                        placeholder="input keyword"
                        name="keyword"
                        onChange={this.setKeyWord}
                    />
                    <FormControlFeedback />
                    </FormGroup>
                    <FormGroup >
                    <Button bsStyle="primary" width="100%" type="button" onClick={this.submitKeyword.bind(this)}>Search </Button>
                    </FormGroup>
                </div>
                </div>
                </Form>
            </Panel>
        );
    }
}
export default FrequencyFormComp;