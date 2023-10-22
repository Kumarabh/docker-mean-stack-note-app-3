import express from 'express';
import notesModel from '../models/notes.model';
import { CustomResponse } from '../types/CustomResponse';

const fetchNotes = async(req: express.Request, res: express.Response) => {
  // console.log('==> fetchNotes');
  try {
    const fetchedNotes = await notesModel.find();
    const response: CustomResponse = {
      error: null,
      data: fetchedNotes,
      success: true
    }
    return res.status(200).send(response);
  } catch (error) {
    const response: CustomResponse = {
      data: null,
      error: error,
      success: false,
    }
    return res.status(500).send(response);
  }

}

const fetchNotesById = async(req: express.Request, res: express.Response) => {
  console.log('==> fetchNotesById', req.params.id);

}

const createNote = async(req: express.Request, res: express.Response) => {
  console.log('==> createNote req.body', req.body);
  try {
    if(req.body) {
      const createdNote = await notesModel.create(req.body);
      const response: CustomResponse = {
        data: createdNote,
        success: true,
        error: null,
      }
      return res.status(200).send(response);
    }
  } catch (error) {
    const response: CustomResponse = {
      data: null,
      error: error,
      success: false,
    }
    return res.status(500).send(response);
  }
}

const updateNoteById = async(req: express.Request, res: express.Response) => {
  console.log('==> updateNote req.params.id', req.params.id);

}

const deleteNoteById = async(req: express.Request, res: express.Response) => {
  console.log('==> deleteNote req.params.id', req.params.id);
  try {
    if(req.params.id) {
      const createdNote = await notesModel.findByIdAndDelete(req.params.id);
      const response: CustomResponse = {
        data: 'Deleted successfully',
        success: true,
        error: null,
      }
      return res.status(200).send(response);
    }
  } catch (error) {
    const response: CustomResponse = {
      data: null,
      error: error,
      success: false,
    }
    return res.status(500).send(response);
  }
}


export { fetchNotes, fetchNotesById, createNote, updateNoteById, deleteNoteById }