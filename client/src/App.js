import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';



function App() {

  const [noteName, setNoteName] = useState('');
  const [description, setDescription] = useState('');
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3005/read").then((response) => {
      setNoteList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3005/insert", {
      noteName: noteName,
      description: description
    });
  }

  return (
  <div className="App">
    <h1>My Notes</h1>

      <label>Piezime:</label>
      <input 
        type="text" 
        onChange={(event) =>{
          setNoteName(event.target.value)}}
      />
      <label>Teksts</label>
      <input 
      type="text" 
      onChange={(event) =>{
        setDescription(event.target.value)}}
      />
      <button onClick={addToList}>Pievienot</button>
      
      <h1>Manas piezimes</h1>

      {noteList.map((val, key) => {
        return( 
          <div key={key}>
            <h1>{val.noteName}</h1>
            <h1>{val.description}</h1> 
          </div>
        );
      })};
  </div>);
}

export default App;
