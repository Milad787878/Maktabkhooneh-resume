import React, {Component} from "react";
import './AboutSection.css'
import down from './images/down.png';

class AboutSection extends Component {
    render() {
        return (
            <div className="main2">
                <div className="temp21">
                    <div className="container-fluid second">

                        <div id="about"/>
                        <div id="AAbout"><p id="header">About</p><br/>
                            <p className="chang">I am Milad Alghosi</p>
                            <p className="chang">I live in Chalus city in Mazandaran province!</p>
                            <br/>
                            <p className="chang">I studied at Talent School of Chalus City and passed my entrance exam
                                three
                                years
                                ago.</p>
                            <p className="chang">I passed my internship three years ago and got a degree in petroleum
                                engineering
                                from Sharif University of Technology.
                                When I came to college I was so happy to be able to make new friends</p>
                            <p className="chang">I'm very interested in programming and would love to pursue programming
                                alongside
                                my own.
                                I was very disappointed in the way of learning programming but I believe in myself that
                                I
                                can be
                                successful someday.</p>
                            <p className="chang">I try to get better every day</p>
                        </div>
                    </div>
                    <a href="#skills"><img src={down} style={{height: 30, marginTop: 130}} alt=""/></a>
                    <div className="temp22"/>
                </div>
                <div id="skills"/>
            </div>
        )
    }
}


export default AboutSection