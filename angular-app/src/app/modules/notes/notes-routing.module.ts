import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'update', component: UpdateNoteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
