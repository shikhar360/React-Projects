import React from "react";
import { nanoid } from "nanoid";

export default function Card({ getData, handleDelete, id }) {
  const [newTitle, setNewTitle] = React.useState("");
  const [newDesc, setNewDesc] = React.useState("");
  const [isSave, setIsSave] = React.useState(false);

  function handleContent(e) {
    setNewTitle(e.target.value);
  }

  function handleMaterial(e) {
    setNewDesc(e.target.value);
  }

  function handleSave() {
    getData(newTitle, newDesc);
    setIsSave(!(newTitle || newDesc) ? false : true);
  }

  function sendDeleteData() {
    handleDelete(id);
  }
  return (
    <div className={`card ${isSave && newDesc.length < 51 ? "saved" : null}`}>
      <input
        type="text"
        className={`title `}
        value={newTitle}
        placeholder="Title"
        onChange={handleContent}
      ></input>
      <textarea
        type="text"
        className={`description ${50 - newDesc.length <= -1 && "redit"}`}
        value={newDesc}
        placeholder="Description"
        // onChange={handleContent}
        onChange={handleMaterial}
      ></textarea>
      <span className="wordCount">{50 - newDesc.length}</span>
      <div className=" icon">
        <div className="saveadd">
          <img
            src="https://img.icons8.com/material-outlined/24/undefined/save.png"
            alt="save"
            className="save"
            onClick={handleSave}
          />
        </div>
        <img
          src="https://img.icons8.com/ios-glyphs/30/undefined/filled-trash.png"
          alt="delete"
          className="delete"
          onClick={sendDeleteData}
        />
      </div>
    </div>
  );
}
