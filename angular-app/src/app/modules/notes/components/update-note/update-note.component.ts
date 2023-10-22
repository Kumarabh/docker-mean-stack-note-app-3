import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Note, NoteApiResponse, SingleNoteApiResponse } from 'src/app/modules/shared/models/note.model';
import { NotesService } from 'src/app/modules/shared/services/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnDestroy{

  notesForm!: FormGroup;
  subscription!: Subscription;
  note!: Note;
  constructor(private fb: FormBuilder, private service: NotesService, private ac: ActivatedRoute) {} 

  ngOnInit(): void {
      this.notesForm = this.fb.group({
        title: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(10)]),
        description: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(50)])
      })

      this.fetchNote();
  }

  fetchNote() {
    const noteId: string = this.ac.snapshot.params['id'];
    this.subscription = this.service.fetchNoteById(noteId).subscribe((response: SingleNoteApiResponse) => {
      this.note = response.data;
      const {title, description} = response.data;
      this.notesForm.setValue({title, description})
    })
  }

  updateNote() {
    const {title, description} = this.notesForm.value;
    this.service.updateNote({...this.note, title, description}).subscribe((response: SingleNoteApiResponse) => {
      this.fetchNote();
    })

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
