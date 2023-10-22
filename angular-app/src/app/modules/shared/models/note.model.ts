export interface Note {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string
}

export interface NoteApiResponse {
  data: Note[];
  error: any;
  success: boolean;
}

export interface SingleNoteApiResponse {
  data: Note;
  error: any;
  success: boolean;
}