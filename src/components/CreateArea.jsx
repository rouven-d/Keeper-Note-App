import React, { useState } from "react";
import { isPropertySignature } from "typescript";

function CreateArea(props) {
  //Create a React state that keeps track of the title and content entered through the forms below
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //Define the function that gets executed when the user changes one of the inputs
  // Destructure the event into name and value variables'
  //Update the state to store the values in the note-state described above
  //setBNote updates the note state with all previous notes and the new value entered for the [name] object
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  //Defines the function that gets executed when the Add button is clicked
  //The function should pass the note state over to the App.js
  //Because were dealing with a form, we prevent the default reload event when hitting the Add button by the preventDefault()
  //Calling the props.onAdd is equivalent to the function addNote in the App.jsx!
  //This passes over the const note to the App.jsx
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
