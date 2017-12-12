import React, { Component } from 'react';
import './style.scss';

import Dashboard from './components/dashboard';

export default class App extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand">Travel planner</a>
            </div>
    
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a>modal</a>
                    </li>
                    <li>
                        <a className="glyphicon glyphicon-off"></a>
                    </li>
                </ul>
                <form className="navbar-form navbar-right">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        </div>
    </nav>
    <Dashboard />
    </div>
    );
  }
}
