var React = require("react");
var Chart = require("react-google-charts").Chart;

class Films extends React.Component{
    constructor() {
        super();

        this.state = {

            options: {
                title: 'The Representation of Different Species in Star Wars Movies',
                titleTextStyle: { fontName: 'Passion One', fontSize: '20'},
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
                label: 'Characters',
                },
                {
                type: 'number',
                label: 'Species',
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
            let row = [film.title, film.characters.length, film.species.length];
            rows.push(row);
        });
        this.setState({rows: rows});
    }
    
    render() {
        return (
            <Chart
            chartType="ColumnChart"
            rows={this.state.rows}
            columns={this.state.columns}
            options={this.state.options}
            graph_id="Column_Represented"
            width={'700px'}
            height={'550px'}
            legend_toggle
            loader={ <span>Loading Chart...</span> }
            />
        );
    }
      
}

module.exports = Films;