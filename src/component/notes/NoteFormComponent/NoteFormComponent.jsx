import React, { useState } from "react";
import styles from "./noteFormStyles.module.css";

function NoteFormComponent({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showForm, setShowForm] = useState(false);

  const showNoteCreationForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setBody("");
    onAddNote(title, body);
    setShowForm(false);
  };
  function handleCancel() {
    setTitle("");
    setBody("");
    setShowForm(() => false);
  }

  return (
    <div className={styles["create-note-container"]}>
      <button onClick={showNoteCreationForm}>Create New Note</button>
      <form
        className={`${styles.noteForm} ${showForm ? styles.showNoteForm : ""}`}
        action=""
        onSubmit={handleSubmit}
      >
        <input
          className="bg-white text-dark p-1"
          type="text"
          placeholder="Tittle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="bg-white text-dark p-1"
          value={body}
          placeholder="Note Description"
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          required
        ></textarea>

        <div className={styles.formButton}>
          <button type="submit" className="btn btn-success">
            Add Note
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>

      <br />
      <br />
    </div>
  );
}

export default NoteFormComponent;
