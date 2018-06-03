var React = require("react");

class Notes extends React.Component{
    constructor() {
        super();
        this.state = {
            name: "",
            text: "",
            notes:[
                {id: 1, name:"Alaska", text: "I love Star Wars."},
                {id: 2, name:"Miley", text: "We need movies from extended universe!"},
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleInputs = this.handleInputs.bind(this);
        this.handleNewNote = this.handleNewNote.bind(this);
    }

    handleNewNote() {
        let newNote = {
            id: this.state.notes.length + 1,
            name: this.refs.name.value,
            text: this.refs.text.value,
        }
        
        let notes = this.state.notes.concat(newNote);

        this.setState({notes: notes});
        console.log(this.state.notes);
    }
    
    handleInputs(e) {
        e.preventDefault();

        let name = this.refs.name.value;
        let text = this.refs.text.value;

        if(!name || !text){
            alert("Please complete all form fields!");
        } else {
            console.log(this.refs.name.value);
            console.log(this.refs.text.value);
    
            this.handleNewNote();

            this.refs.name.value = "";
            this.refs.text.value = "";
        }

    }

    handleChange(e) {
        console.log("changing text");
    }

    render() {
        return (
        <div className="dash text-center">
            <h1>WELCOME TO THE NOTES PAGE!</h1>
            <p><i>"We would be honoured if you would join us."</i>-Darth Vader</p>
            
            <div className="col-xs-6">
                <h2>FEEL FREE TO DROP US A NOTE!</h2>
                
                <form onSubmit={this.handleInputs}>
                    
                    <iframe src="https://giphy.com/embed/93lAsxsekFNIMYegSC" width="480" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

                    <div>
                        <input type="text" name="name" className="form-control" placeholder="Name" ref="name" onChange={this.handleChange}/> 
                    </div>
                    <div>  
                        <input type="text" name="note" className="form-control" placeholder="Add Note" ref="text" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="submit" id="submit" name="submit" width="480" className="btn btn-warning btn-block" value="submit" />
                    </div>
                </form>
            </div>

            <div className="col-xs-6">
                <h2>PREVIOUS NOTES:</h2>
                <ul className="note-list">
                    {
                        this.state.notes.map(note => {
                            return (
                                <div id="notes" className="row col-xs-5" key={note.id}>
                                    <h3>Name:</h3>
                                    <h4>{note.name}</h4>
                                    <h3>Note:</h3>
                                    <h4>{note.text}</h4>
                                </div>
                            )
                        })
                    }
                </ul>

                
            </div>
        </div>
    )}

}

module.exports = Notes;