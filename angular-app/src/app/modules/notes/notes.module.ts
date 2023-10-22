import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { SharedModule } from '../shared/shared.module';
import { FetchNotesComponent } from './components/fetch-notes/fetch-notes.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';

@NgModule({
  declarations: [
    NotesComponent,
    CreateNoteComponent,
    FetchNotesComponent,
    UpdateNoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule
  ]
})
export class NotesModule { }
