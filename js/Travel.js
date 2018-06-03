var React = require("react");
var Chart = require("react-google-charts").Chart;

class Travel extends React.Component{
    constructor() {
        super();

        this.state = {

            options: {
                title: 'The Representation of Different Travel Methods in Star Wars Movies',
                titleTextStyle: { fontName: 'Passion One', fontSize: '20'},
                curveType: 'function',
                hAxis: { 
                    title: 'Film Title',
                    textStyle: { fontName: 'Roboto', fontSize: '10', bold: true} 
                },
                vAxis: { 
                    title: 'Number Represented',
                    textStyle: { fontName: 'Roboto', fontSize: '10', bold: true} 
                },
                backgroundColor: '#FFEBCD',
                colors: ['#af9c07', '#7F744A'],
            },
        
            rows: [
                ['', 0, 0],
            ],
        
            columns: [
                {
                type: 'string',
                label: 'Name',
                },
                {
                type: 'number',
                label: 'Starships',
                },
                {
                type: 'number',
                label: 'Vehicles',
                },
            ],
    
        };
    }
        
    componentDidMount() {
            this._fetchMovieData();
        }
        
    _fetchMovieData() {
        jQuery.ajax({
            method: "GET",
            url: "https://swapi.co/api/films",
            success: (films) => {
                this._updateMovieData(films.results); 
            }
        });
    }
    
    _updateMovieData(films) {
        var rows = [];
        films.forEach( (film) => {
            let row = [film.title, film.starships.length, film.vehicles.length];
            rows.push(row);
        });
        this.setState({rows: rows});
    }
    
    render() {
        return (
            <Chart
            chartType="LineChart"
            rows={this.state.rows}
            columns={this.state.columns}
            options={this.state.options}
            graph_id="Line_Travel"
            width={'700px'}
            height={'550px'}
            legend_toggle
            loader={ <span>Loading Chart...</span> }
            />
        );
    }
      
}

module.exports = Travel;