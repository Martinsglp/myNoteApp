const mongoose = require('mongoose');

//Define note, what will it include
const NoteSchema = new mongoose.Schema({
    noteName:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
});

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;