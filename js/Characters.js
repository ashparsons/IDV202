var React = require("react");
var Chart = require("react-google-charts").Chart;

class Characters extends React.Component{

  constructor(props) {
    super(props);
    this.state = {

      options: {
        title: 'The Height of Different Star Wars Characters',
        titleTextStyle: { fontName: 'Passion One', fontSize: '20'},
        curveType: 'function',
        hAxis: { 
          title: 'Height (cm)' ,
          textStyle: { fontName: 'Roboto', fontSize: '10', bold: true}
        },
        vAxis: { 
          title: 'Character Name',
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
          label: 'Height',
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
          url: "https://swapi.co/api/people",
          success: (people) => {
              this._updatePeople(people.results); 
          }
      });
  }

  _updatePeople(people) {
      var rows = [];
      people.forEach( (person) => {
          let row = [person.name, parseInt(person.height)];
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
          graph_id="Bar_Heights"
          width={'650px'}
          height={'500px'}
          legend_toggle
          loader={ <span>Loading Height Chart...</span> }
        />
    );
  }

}

module.exports = Characters;