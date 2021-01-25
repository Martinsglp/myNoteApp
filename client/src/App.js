import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Note from './Components/Note';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NotFoundPage from './Pages/404';
import AboutPage from './Pages/About';




function App() {

  const [noteName, setNoteName] = useState('');
  const [description, setDescription] = useState('');
  const [noteList, setNoteList] = useState([]);
  const [newNoteDescription, setNewNoteDescriptiuon] = useState('');

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
  };

  const deleteNote = (id) => {
    Axios.delete('http://localhost:3005/delete/${id}');
  };

  const updateNote = (id) => {
    Axios.put("http://localhost:3005/update", {
      id: id,
      newNoteDescription: newNoteDescription,
    });
  };

  return (
  <div className="App">
    <Header/>
      <Note/>
      <h1>Visas piezimes</h1>

      {noteList.map((val, key) => {
        return( 
          <div key={key} className='noteInList'>
            <h1>{val.noteName}</h1>
            <h1>{val.description}</h1>
            <input 
              type="text" 
              placeholder="Labot ierakstu"
              onChange={(event) =>{
                setNewNoteDescriptiuon(event.target.value);
              }}
            />
            <button onClick={() => updateNote(val._id)}>Atjaunot</button>
            <button onClick={() => deleteNote(val._id)}>Dzest</button> 
          </div>
        );
      })};
  </div>);
}

export default App;
