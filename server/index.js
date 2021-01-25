const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const NoteModel = require('./models/Note')

app.use(express.json());
app.use(cors());

//connection to database
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

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await NoteModel.findByIdAndRemove(id).exec();
    res.send('Dzests')
});


app.put('/update', async (req, res) => {
    const newDescription = req.body.newDescription;
    const id = req.body.id;

    try {
        await NoteModel.findById(id, (error, updatedNote) =>{
            updatedNote.description = newDescription;
            updatedNote.save();
            res.send("Atjaunots");
        });
    } catch (error) {
        console.log(error);
    }
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