import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NoteApiResponse } from 'src/app/modules/shared/models/note.model';
import { NotesService } from 'src/app/modules/shared/services/notes.service';
import { FetchNotesComponent } from '../fetch-notes/fetch-notes.component';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit, OnDestroy {

  notesForm!: FormGroup;
  subscription!: Subscription;

  constructor(private fb: FormBuilder, private service: NotesService) {} 

  ngOnInit(): void {
      this.notesForm = this.fb.group({
        title: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(10)]),
        description: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(50)])
      })
  }

  onSubmit() {
    const note = this.notesForm.value;
    this.subscription = this.service.createNote(note).subscribe((response: NoteApiResponse) => {
      if(response.success) {
        this.service._refreshNotes.next(true);
        setTimeout(() => {
          this.service._refreshNotes.next(false);
        });
      }
    })
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }
}
