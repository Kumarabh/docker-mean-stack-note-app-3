import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is a required field.'],
    min: 1,
    max: 10,
  },
  description: {
    type: String,
    required: [true, 'Description is a required field.'],
    min: 1,
    max: 50
  }
}, {timestamps: true})

export default mongoose.model('Note', notesSchema);