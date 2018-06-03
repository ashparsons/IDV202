var React = require("react");
var Chart = require("react-google-charts").Chart;

class Planets extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          options: {
            title: 'The Diameter of Different Planets in Star Wars',
            titleTextStyle: { fontName: 'Passion One', fontSize: '20'},
            hAxis: { 
              title: 'Planet',
              textStyle: { fontName: 'Roboto', fontSize: '10', bold: true} 
            },
            vAxis: { 
              title: 'Diameter',
              textStyle: { fontName: 'Roboto', fontSize: '10', bold: true} 
            },
            backgroundColor: 'transparent',
            colors: ['#af9c07', '#FFEC57', '#FFE30A', '#7F762B', '#CCB608', '#AF8B07', '#FFDB57', '#FFCA0A', '#7F744A', '#CCA208'],
            is3D: true,
          },
          rows: [
            ['', 0],
          ],
          columns: [
            {
              type: 'string',
              label: 'Name',
            },
            {
              type: 'number',
              label: 'Diameter',
            },
          ],
        };
      }
        
      componentDidMount() {
           this._fetchPlanets();
        }
        
      _fetchPlanets() {
            jQuery.ajax({
               method: "GET",
               url: "https://swapi.co/api/planets",
               success: (planets) => {
                   this._updatePlanets(planets.results); 
               }
            });
        }
    
        _updatePlanets(planets) {
            var rows = [];
            planets.forEach( (planet) => {
               let row = [planet.name, parseInt(planet.diameter)];
               rows.push(row);
            });
            this.setState({rows: rows});
        }
        
      render() {
        return (
            <Chart
              chartType="PieChart"
              rows={this.state.rows}
              columns={this.state.columns}
              options={this.state.options}
              graph_id="Pie_Terrains"
              width={'650px'}
              height={'500px'}
              legend_toggle
              loader={ <span>Loading Diameter Chart...</span> }
            />
        );
      }

}

module.exports = Planets;