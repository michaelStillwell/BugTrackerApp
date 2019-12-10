import React, { Component } from 'react';

/**
 * TODO:
 *  - promise for reading all bugs for a specific project
 *  - style page to display bugs and all of their needed data
 * */

class Project extends Component {
    render() {
        console.log(this.props);
        return (
            <div id="project">
                <h1>Project Page!!</h1>
            </div>
        )
    }
}

export default Project;
