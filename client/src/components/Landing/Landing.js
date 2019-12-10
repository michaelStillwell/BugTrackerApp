import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

/**
 * TODO:
 *  - create way to log in user or sign up user
 *  - style page
 */

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="toolbar"></div>
                
                <div className="title-card">
                    <h1>MothSquasher</h1>

                    <Button variant="secondary" size="lg" active>
                        Test Button 2
                    </Button>

                    <Button variant="primary" size="lg" active>
                        Test Button
                    </Button>

                    <div className="scroll"></div>
                </div>
                
                <div className="about">
                    <div className="left">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, maxime nostrum asperiores voluptatem consectetur sit exercitationem sapiente sequi mollitia ipsum nobis deleniti! Eaque ab veritatis vitae excepturi! Odit, reprehenderit explicabo.</p>
                    </div>

                    <div className="right">
                        <img />
                    </div>
                </div>

                <div className="footer">
                    <a href="#">About</a>
                    <a href="#">FAQ</a>
                </div>
            </div>
        );
    }
};

export default Landing;