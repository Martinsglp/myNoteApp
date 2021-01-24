const mongoose = require('mongoose');

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