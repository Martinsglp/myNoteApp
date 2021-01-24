const mongoose = require('mongoose');
const express = require('express');
const app = express();

const NoteModel = require('./models/Note')

app.use(express.json())

//const myURL = "mongodb+srv://martinsglp:martinsglp12345@cluster0.5fgvd.mongodb.net/myNotes?retryWrites=true&w=majority";

mongoose.connect("mongodb+srv://martinsglp:martinsglp12345@cluster0.5fgvd.mongodb.net/myNoteApp?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
});

app.get('/', async (req, res) => {
    const note = new NoteModel({
        noteName: "Skola",
        description: "Macos VeA"
    });

    try {
        await note.save();
        res.send('It worked?!');
    } catch (error) {
        console.log(error);
    }
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});