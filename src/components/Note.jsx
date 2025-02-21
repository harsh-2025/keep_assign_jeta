import React, { useState } from "react";

const Note = ({ note, updateNote, deleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(note.title);
  const [updatedContent, setUpdatedContent] = useState(note.content);

  const handleUpdate = () => {
    updateNote(note.id, { ...note, title: updatedTitle, content: updatedContent });
    setIsEditing(false);
  };
  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
                      <button onClick={() => setIsEditing(true)}>
                          Edit
          </button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Note;
