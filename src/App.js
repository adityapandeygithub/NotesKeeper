import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import './App.css'

function App(){
  const[notes,setNotes] = useState([]);
  function addNote(newNote){
    setNotes((prevNotes) =>{
      return [...prevNotes,newNote];
    })
  }

  function deleteNote(id){
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div class="fullbody">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        )
      })}
    </div>
    
  );
}
export default App;