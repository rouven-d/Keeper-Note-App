import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";
import { createNotEmittedStatement } from "typescript";

function App() {
  //Defines the state for the notes array that collects all notes from the inputs
  const [notes, setNotes] = useState([]);

  //The addNote function links via props to the submitNote function in the CreateArea component
  //Gets passed in the note object from there
  //Want to pass in the note object into the notes array defined above
  //For that, use setNotes() with all previous values of notes and the new note
  //Using the spread operator to add all previous notes and then the new one
  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  //Defines the delete function based on an item id.
  //We update the notes array with setNotes with all previous notes
  //We then loop through all previous notes using a filter function that takes every noteItem and it's index into consideration
  // We only return the noteItems which index does not equal the id
  //This basically deletes the id
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  //The index is a part of the map or filter functions and gets assigned automatically
  // You can use the index to uniquely identify an item in an array
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
