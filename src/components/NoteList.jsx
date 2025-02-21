import React from "react";
import Note from "./Note";

const NotesList = ({ notes, updateNote, deleteNote }) => {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <Note key={note.id} note={note} updateNote={updateNote} deleteNote={deleteNote} />
        ))
      ) : (
        <p className="empty-message">No notes yet. Start adding!</p>
      )}
    </div>
  );
};

export default NotesList;
