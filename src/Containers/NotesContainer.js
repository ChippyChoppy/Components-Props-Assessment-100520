import React from 'react';
import Note from '../Components/Note';
class NotesContainer extends React.Component {

    apiResponse = () => {
        return [
            { id: 1, content: "First Note" }, 
            { id: 2, content: "Second Note" }, 
            { id: 3, content: "Third Note" }, 
            { id: 4, content: "Fourth Note" }
        ]
    }

    oneNote = () => {
        return this.apiResponse().map((noteContent) => {
            return <Note note={noteContent} /> 
        })
    }

    render() {
        return (
            <ul>
                {this.oneNote()}
            </ul>
        )
    }

}

export default NotesContainer;

