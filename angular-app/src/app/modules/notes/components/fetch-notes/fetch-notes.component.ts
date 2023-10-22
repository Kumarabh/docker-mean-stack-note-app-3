import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note, NoteApiResponse } from 'src/app/modules/shared/models/note.model';
import { NotesService } from 'src/app/modules/shared/services/notes.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-fetch-notes',
  templateUrl: './fetch-notes.component.html',
  styleUrls: ['./fetch-notes.component.scss']
})
export class FetchNotesComponent implements OnInit, OnDestroy {

  notes!: Note[];
  subscription!: Subscription;
  noteSubscription!: Subscription;

  constructor( private service: NotesService, private router: Router ) {}

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
      if(Array.isArray(response.data))
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

  updateNote(_id: string): void {
    this.router.navigateByUrl('notes/update/'+ _id)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.noteSubscription.unsubscribe();
  }

}
