import React from "react";
import PYTHON from './images/python.png';
import HTML from './images/html-5.png';
import CSS from './images/css.png';
import JS from './images/js.jpg';
import REACT from './images/React.png';
import cSharp from './images/csharp.png';
import up from './images/up.png';
import './SkillsSection.css';


class skillsSection extends React.Component {
    render() {
        return (
            <div className="main3">
                <div className="temp31"/>
                <p id="skill">Skills</p>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="card Cardheight border-dark">
                            <img style={{margin: 20}} src={PYTHON} alt="python"/>
                            <div className="card-body" style={{marginTop: 50}}>
                                <h2>Python</h2>
                            </div>
                        </div>
                        <div className="card Cardheight border-dark">
                            <img style={{margin: 20}} src={HTML} alt="python"/>
                            <div className="card-body" style={{marginTop: 50}}>
                                <h2>HTML</h2>
                            </div>
                        </div>
                        <div className="card Cardheight border-dark">
                            <img style={{margin: 20}} src={CSS} alt="python"/>
                            <div className="card-body" style={{marginTop: 50}}>
                                <h2>CSS</h2>
                            </div>
                        </div>
                        <div className="card Cardheight border-dark">
                            <img style={{margin: 20, width: 150}} src={REACT} alt="python"/>
                            <div className="card-body" style={{marginTop: 60}}>
                                <h2>React</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="card Cardheight border-dark">
                            <img style={{margin: 20, height: 150}} src={cSharp} alt="python"/>
                            <div className="card-body" style={{marginTop: 50}}>
                                <h2>C#</h2>
                            </div>
                        </div>
                        <div className="card Cardheight border-dark">
                            <img className="js" style={{margin: 20}} src={JS} alt="python"/>
                            <div className="card-body" style={{marginTop: 50}}>
                                <h2>Javascript</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mr-4">
                    <a href="#Top"><img className="up" src={up} alt=""/></a>
                </div>
                <div className="temp32"/>
            </div>
        )
    }
}

export default skillsSection