var React = require("react");
var Chart = require("react-google-charts").Chart;

class Starships extends React.Component{
    constructor() {
        super();
        this.state = {
            options: {
              title: 'The Maximum Atmosphering Speed of Different Starships',
              titleTextStyle: { fontName: 'Passion One', fontSize: '20'},
              vAxis: { 
                title: 'Starship Name',
                textStyle: { fontName: 'Roboto', fontSize: '10', bold: true}
              },
              hAxis: { 
                title: 'Maximum Atmosphering Speed',
                textStyle: { fontName: 'Roboto', fontSize: '10', bold: true} 
              },
              backgroundColor: 'transparent',
              colors: ['#af9c07'],
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
                label: 'Speed',
              },
            ],
          };
        }
          
        componentDidMount() {
             this._fetchPeople();
          }
          
        _fetchPeople() {
              jQuery.ajax({
                 method: "GET",
                 url: "https://swapi.co/api/starships",
                 success: (starships) => {
                     this._updatePeople(starships.results); 
                 }
              });
          }
      
          _updatePeople(starships) {
              var rows = [];
              starships.forEach( (ship) => {
                 let row = [ship.name, parseInt(ship.max_atmosphering_speed)];
                 rows.push(row);
              });
              this.setState({rows: rows});
          }
          
        render() {
          return (
              <Chart
                chartType="BarChart"
                rows={this.state.rows}
                columns={this.state.columns}
                options={this.state.options}
                graph_id="Line_Speeds"
                width={'650px'}
                height={'500px'}
                legend_toggle
                loader={ <span>Loading Speed Chart...</span> }
              />
          );
        }
}

module.exports = Starships;