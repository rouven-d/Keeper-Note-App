import React from "react";

//This function handles the onDelete function defined in the App.jsx when the Delete button gets clicked
//Passes in the props.id that is based on the index set in the map function in App.jsx
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
