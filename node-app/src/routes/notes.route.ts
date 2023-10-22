import express from 'express';
import { createNote, deleteNoteById, fetchNotes, fetchNotesById, updateNoteById } from '../controllers/notes.controller';
const notesRouter = express.Router();

notesRouter.route('/')
.get(fetchNotes)
.post(createNote)
.put(updateNoteById)


notesRouter.route('/:id')
.get(fetchNotesById)
.delete(deleteNoteById)

export default notesRouter;
