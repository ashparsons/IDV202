var React = require("react");
var Link = require("react-router-dom").Link;
var Route = require("react-router-dom").Route;
var Switch = require("react-router-dom").Switch;

var Dash = require("./Dash");
var Comparison = require("./Comparison");
var Notes = require("./Notes");

class App extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (
            <div className="routing-system">
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Star Wars API</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/Dash">Dash</Link></li>
                            <li><Link to="/Comparison">Comparison</Link></li>
                            <li><Link to="/Notes">Notes</Link></li>
                        </ul>
                    </div>
                </nav>

                <main>
                    <Switch> 
                        <Route exact path="/Dash" component={Dash} />
                        <Route exact path="/Comparison" component={Comparison} />
                        <Route exact path="/Notes" component={Notes} />
                    </Switch>
                </main>

            </div>
        )
    }
}

module.exports = App;