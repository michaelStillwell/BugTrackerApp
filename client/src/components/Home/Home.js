import React, { Component } from 'react';
import axios from 'axios';

/**
 * TODO:
 *  - log out button
 *  - create project button
 *  - remove project (decide if that means to delete project or archive it)
 *  - view profile (decide if that means modal or new page)
 *  - on profile: edit password, username and other data
 *  - style layout for page
 */

class Home extends Component {
    constructor() {
        super();

        // Set default values for a users projects and if the promise is complete.
        this.state = {
            projects: [],
            loading: true
        }
    }

    componentDidMount() {
        // Send GET request to server asking for all the projects for a specified user.
        axios.get(`/api/read/projects/${this.props.user.id}`)
            // After request is completed use setState to rerender the page with the new information.
            .then(( {data} ) => this.setState({projects: data, loading: false}))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div id="home">
                <h1>Home Page</h1>
                <h3>Welcome {this.props.user.username}</h3>

                {/* If the promise has not resolved display a loading message */}
                { !this.state.loading ? (
                    <div className="projects">
                    {this.state.projects.map(item => (
                        <div className="project" key={item.id}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                ) : <h4>Loading...</h4>}
            </div>
        );
    }
};

export default Home;
