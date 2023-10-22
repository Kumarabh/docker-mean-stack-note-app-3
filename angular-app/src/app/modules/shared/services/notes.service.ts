import { Injectable } from '@angular/core';
import { Note, NoteApiResponse } from '../models/note.model';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../Common/api.constant';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private baseUrl = baseUrl;
  _refreshNotes: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor( private http: HttpClient ) { }

  createNote(note: Note): Observable<NoteApiResponse> {
    const httpOptions = {
      headers: {
        'content-type': 'application/json'
      },
      params: {}
    }
    return this.http.post<NoteApiResponse>(this.baseUrl.concat('notes'), note, httpOptions);
  }

  fetchNotes(): Observable<NoteApiResponse> {
    const httpOptions = {
      Headers: {
        'content-type': 'application/json'
      },
      params: {}
    }
    return this.http.get<NoteApiResponse>(this.baseUrl.concat('notes'))
  }

  deleteNoteById(params: string): Observable<NoteApiResponse> {
    const httpOptions = {
      Headers: {
        'content-type': 'application/json'
      },
      params: { }
    }
    return this.http.delete<NoteApiResponse>(this.baseUrl.concat('notes/', params), httpOptions);
  }

}
