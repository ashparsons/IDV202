var React = require("react");
var Carousel = require('nuka-carousel');
var Chart = require("react-google-charts").Chart;
var Characters = require("./Characters");
var Starships = require("./Starships");
var Planets = require("./Planets");

class Dash extends React.Component{
    constructor() {
        super();
        this.state = {
            people : [],
            starships : [],
            planets: [],
        }
    }

    render() {
        return (
            <div className="dash text-center">
                <h1>WELCOME TO THE STAR WARS API DASH PAGE!</h1>
                <p><i>"These aren’t the graphs you’re looking for."</i>-Obi-Wan Kenobi</p>

                <Carousel>
                    <div id="graphs" className="col-xs-12">
                        <Characters people = {this.state.people}/>
                    </div>
                    <div id="graphs" className="col-xs-12">
                        <Starships starships = {this.state.starships}/>
                    </div>
                    <div id="graphs" className="col-xs-12">
                        <Planets planets = {this.state.planets}/>
                    </div>
                </Carousel>

                
                
            </div>
        )
    }

}

module.exports = Dash;