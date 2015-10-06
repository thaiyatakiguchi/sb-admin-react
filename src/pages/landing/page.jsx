/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import Session from "../../common/session";

import { Link } from "react-router";

var Reflux = require("reflux");
var ProfileStore = require('../../stores/app-store');
var ProfileActions = require('../../actions/app-actions');

class LandingPage extends Component {

  static contextTypes = {
    //onSetTitle: PropTypes.func.isRequired,
  };

  // mixins = [Reflux.connect(ProfileStore)];

  // constructor(){
  //   Reflux.connect(ProfileStore);
  //   super(ProfileStore);
  //   this.state = {data: ProfileStore.data};
  // }

  render() {
    const title = 'Log In';
    //this.context.onSetTitle(title);
    return (
          <div className="col-md-4 col-md-offset-4">

            <div className="text-center" style={{padding:'30px'}}>
              <img className="Header-brandImg" src={require('../../common/logo.png')} width="200" height="38" alt="React" />
            </div>
                    
            <div className="login-panel panel panel-default">

                <div>
                </div>
                <div className="panel-heading">
                    <h3 className="panel-title" onClick={ProfileActions.loggedIn}>Please Sign In</h3>
                </div>
                <div className="panel-body">
                    <form role="form" onSubmit={this.verifyLogin.bind(this)}>
                        <fieldset>
                            <div className="form-group">
                                <input onChange={this.setLoginID.bind(this)} className="form-control" placeholder="login ID" ref="loginID" type="text" autofocus="" />
                            </div>
                            <div className="form-group">
                                <input onChange={this.setPassword.bind(this)} className="form-control" placeholder="Password" ref="password" type="password" />
                            </div>
                            <Link to="Dashboard"><button className="btn btn-lg btn-success btn-block" onClick={ProfileActions.loggedIn}>Login</button></Link>
                        </fieldset>
                    </form>
                </div>
            </div>

          </div>
        
    );
  };

  verifyLogin(e) {
    e.stopPropagation();
    ProfileActions.loggedIn;
  };

  setLoginID(e) {
    this.setState({loginID: e.target.value});
  };

  setPassword(e) {
    this.setState({password: e.target.value});
  };

}

export default LandingPage;