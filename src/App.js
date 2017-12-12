import React, { Component } from 'react';
import './style.scss';

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
    <section className="container dashboard">
      <div className="dashboard-controls clearfix">
        <div className="btn-group btn-group-xs pull-right">
          <label className="btn btn-default" >Show all</label>
          <label className="btn btn-default" >by Date</label>
          <label className="btn btn-default" >by Status</label>
        </div>
      </div>
      <ul className="portfolio">
        <li className="thumbnail portfolio-thumbnail" >
          <div className="dashboard_card-img"></div>
          <div className="caption">
            <h3>title</h3>
            <p>Plan date</p>
            <p><span className="label">period</span></p>
            <p className="button-holder">
              <a href="#"
                className="btn btn-primary">Open</a>
              <a href="#" className="btn btn-default">Hide</a>
            </p>
          </div>
        </li>
      </ul>
    
    </section>
    </div>
    );
  }
}
