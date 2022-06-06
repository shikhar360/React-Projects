import React from "react";
import Card from "./Card";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = React.useState([
    // {
    //   id: "1",
    //   title: "abcd",
    //   description: "this will be the description",
    // },
    // {
    //   id: nanoid(),
    //   title: "efgh0",
    //   description: "this will be the description 2",
    // },
  ]);
  const [search, setSearch] = React.useState("");
  // console.log(notes);

  function addNotes() {
    setNotes((prev) => {
      return [
        ...prev,
        {
          id: nanoid(),
          title: "",
          description: "",
        },
      ];
    });
  }

  function getData(titledata, descdata) {
    if (!(titledata || descdata)) return;
    if (descdata.length > 50) return;
    const note = [
      ...notes,
      { id: nanoid(), title: titledata, description: descdata },
    ];

    setNotes(note);
  }

  function handleDelete(filtered) {
    setNotes(notes.filter((itm) => itm.id !== filtered));
  }

  // function handleSearch(e) {
  //   setSearch(e.target.value);

  //   console.log(e.target.value);
  // }
  const filtered = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Notes App</h1>
      {/* <div className="search-box">
        <span className="search-title"> Search Notes</span>{" "}
        <input type="text" className="search" onChange={handleSearch} />
      </div> */}

      {notes.length < 1 ? (
        <div className="addbox" onClick={addNotes}>
          <span> Add Notes</span>
          <img
            src="https://img.icons8.com/material-outlined/24/undefined/add.png"
            alt="add"
            className=" add"
          />
        </div>
      ) : null}

      <div className="notes">
        {notes &&
          filtered.map((note) => {
            return (
              <Card
                key={note.id}
                {...note}
                getData={getData}
                handleDelete={handleDelete}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
