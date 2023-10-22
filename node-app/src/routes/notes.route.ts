import express from 'express';
import { createNote, deleteNoteById, fetchNotes, fetchNotesById, updateNoteById } from '../controllers/notes.controller';
const notesRouter = express.Router();

notesRouter.route('/')
.get(fetchNotes)
.post(createNote)

notesRouter.route('/:id')
.get(fetchNotesById)
.put(updateNoteById)
.delete(deleteNoteById)

export default notesRouter;
