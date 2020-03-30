import React, {Component} from "react";
import pencil from "./images/pencil.png"
import $ from 'jquery'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme () {
        let color_first_section = ["#F9BDB6", "#3066F0", "#30F05E", "#2ED208"];
        let color_about_section = ["#FF7684", "#76FCFF", "#A7F513", "#23ECE1"];
        let color_skill_section = ["#F59413", "#F97DF6", "#A8A8A8", "#C87EF4"];

        let first = color_first_section[Math.floor(Math.random() * 4)];
        let second = color_about_section[Math.floor(Math.random() * 4)];
        let third = color_skill_section[Math.floor(Math.random() * 4)];

        $(".main").css("background-color", first);
        $(".main2").css("background-color", second);
        $(".main3").css("background-color", third);
    }
    render() {
        return (
            <div className="d-flex bg-light fixed-top">
                <div className="p-2" style={{margin: 10}}><button className="btn btn-light" onClick={this.changeTheme}><img src={pencil} alt="pencil"/></button></div>
                <div className="p-2 ml-auto" style={{fontSize: 20, margin: 10}}><a href={`#about`}>About</a></div>
                <div className="p-2" style={{fontSize: 20, margin: 10}}><a href={`#skills`}>Skills</a></div>
            </div>
        )
    }
}

export default Navbar