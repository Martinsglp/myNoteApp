import React, { useState } from 'react';
import Axios from 'axios';

function Note(notes){

    const [noteName, setNoteName] = useState('');
    const [description, setDescription] = useState('');

    const addToList = () => {
        Axios.post("http://localhost:3005/insert", {
          noteName: noteName,
          description: description
        });
      };
    

    return(
        <div className="note">
            <label>Piezime:</label>
            <input 
                type="text" 
                onChange={(event) =>{
                setNoteName(event.target.value);
                }}
            />
            <label>Teksts</label>
            <input 
            type="text" 
            onChange={(event) =>{
                setDescription(event.target.value)}}
            />
            <button onClick={addToList}>Pievienot</button>
        </div>
    );
}

export default Note;
