import React, { Component } from 'react';
import ReactDom from 'react-dom';

class ButtonGroup extends Component {

    render() {
        return (
            <div className="btn-group btn-group-xs pull-right">
                <label className="btn btn-default" >Show all</label>
                <label className="btn btn-default" >by Date</label>
                <label className="btn btn-default" >by Status</label>
            </div>
        )
    }
}

export default ButtonGroup;