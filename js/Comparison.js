var React = require("react");
var Chart = require("react-google-charts").Chart;
var Films = require("./Films");
var Travel = require("./Travel");

class Comparison extends React.Component{
    constructor() {
        super();

        this.state = {
            films : [],
        }
    }

    render() {
        return (
            <div className="dash text-center">
                <h1>WELCOME TO THE COMPARISON PAGE!</h1>
                <p><i>"Never tell me the odds!"</i>-Han Solo</p>

                {/* <Crawl
                title="Episode IV"
                subTitle="A New Hope"
                text="It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…"
                /> */}

                <div id="travel" className="col-xs-6">
                    <Travel films = {this.state.films}/>
                </div>
                <div className="col-xs-6">
                    <Films films = {this.state.films}/>
                </div>
            </div>
        )
    }
}

module.exports = Comparison;