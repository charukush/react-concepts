import { useState } from "react";

export function List() {
  const [text, setText] = useState();
  const [list, setList] = useState([]);

  function handleList() {
    setList([...list, text]);
    setText(" ");
  }

  return (
    <>
      Display list!!
      <p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
      <p>
        <button className="btn-rounded" onClick={handleList}>
          Submit
        </button>
        <p>
          {list.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </p>
      </p>
    </>
  );
}
