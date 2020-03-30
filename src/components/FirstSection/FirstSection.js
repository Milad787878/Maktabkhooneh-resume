import React, {Component} from "react";
import './FirstSection.css';
import telegram from './images/telegram.png';
import instagram from './images/instagram.png';
import whatsapp from './images/whatsapp.png';
import down from './images/down.png';



class FirstSection extends Component {
    render() {
        return (
            <div className="main">
                <div className="temp1"/>
                <div className="container-fluid d-flex justify-content-center align-items-center name">
                    <p className="mt-5">Hello, I'm Milad!</p>
                </div>
                <br/>
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <h3>Petroleum engineering | Sharif university of technology | I like Taekwondo</h3>
                </div>
                <div  className="container-fluid d-flex justify-content-center align-items-center">
                    <a href="#"><img src={telegram} alt="Tel" className="social"/></a>
                    <a href="https://www.instagram.com/mohammadjavad_alghosi78/" target="_blank"><img src={instagram} alt="Ins" className="social"/></a>
                    <a href="#"><img src={whatsapp} alt="What" className="social"/></a>
                </div>
                <a href="#about" id="down" ><img src={down} style={{height: 30, marginTop: 220, color: "white"}} alt=""/></a>
                <div className="temp2"/>
            </div>
        )
    }
}


export default FirstSection
