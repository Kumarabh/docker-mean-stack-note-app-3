import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note, NoteApiResponse } from 'src/app/modules/shared/models/note.model';
import { NotesService } from 'src/app/modules/shared/services/notes.service';

@Component({
  selector: 'app-fetch-notes',
  templateUrl: './fetch-notes.component.html',
  styleUrls: ['./fetch-notes.component.scss']
})
export class FetchNotesComponent implements OnInit, OnDestroy {

  notes!: Note[];
  subscription!: Subscription;
  noteSubscription!: Subscription;

  constructor( private service: NotesService ) {}

  ngOnInit(): void {
      this.fetchNotes();
      this.noteSubscription = this.service._refreshNotes.subscribe((newNoteAdded: boolean) => { 
        if(newNoteAdded) {
          this.fetchNotes();
        }
      })
  }

  fetchNotes(): void {
    this.subscription = this.service.fetchNotes().subscribe((response: NoteApiResponse) => {
      this.notes = response.data;
      console.log('==> this.notes', this.notes);
    })
  }

  deleteNoteById(_id: string): void {
    this.service.deleteNoteById(_id).subscribe((response: NoteApiResponse) => {
      console.log('==> deleteNoteById', response);
      this.fetchNotes();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.noteSubscription.unsubscribe();
  }
}
