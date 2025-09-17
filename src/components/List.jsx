import { useState } from 'react';

export function List() {
  const [text, setText] = useState();
  const [list, setList] = useState([]);

  function handleList() {
    setList([...list, text]);
    setText(' ');
  }
  //Delete item by index
  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

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
            <li key={index}>
              {items}
              <button
                className="btn-rounded" style={{margin:5}}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </p>
      </p>
    </>
  );
}
