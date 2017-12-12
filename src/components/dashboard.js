import React from 'react';
import ButtonGroup from './elements/buttonGroup';

function Dashboard (props) {
    return (
        <section className="container dashboard">
            <div className="dashboard-controls clearfix">
            <ButtonGroup />
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
    )
}

export default Dashboard;