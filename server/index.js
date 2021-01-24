const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const NoteModel = require('./models/Note')

app.use(express.json());
app.use(cors());

//const myURL = "mongodb+srv://martinsglp:martinsglp12345@cluster0.5fgvd.mongodb.net/myNotes?retryWrites=true&w=majority";

mongoose.connect("mongodb+srv://martinsglp:martinsglp12345@cluster0.5fgvd.mongodb.net/myNoteApp?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
});

app.get('/read', async (req, res) => {
    NoteModel.find({}, (error, result) => {
        if(error){
            res.send(error);
        }
        res.send(result);
    });
});

app.post('/insert', async (req, res) => {
    const noteName = req.body.noteName;
    const description = req.body.description;
    const note = new NoteModel({
        noteName: noteName,
        description: description
    });

    try {
        await note.save();
        res.send('It worked?!');
    } catch (error) {
        console.log(error);
    }
});





app.listen(3005, ()=>{
    console.log("Server running on port 3005");
});