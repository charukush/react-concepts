import { useState } from 'react';

export default function ListTest() {
    const [text, setText] = useState();
    const [list, setList] = useState([]);
    function handleList() {
        setList([...list, text]);
        setText(" ");
    }
    function handleDelete(index) {
        setList(list.filter((_, i)=> i !==index))
    }
  return (
    <>
      <p>Test List!!</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>
        <button className="btn-rounded" onClick={handleList}>Submit</button>
      </p>
          {list.map((items, index) => <li key={index}>
              {items}
              <button className = "btn-rounded btn-rounded-delete" onClick={()=>{handleDelete(index)}}>Delete</button>
      </li>)}
    </>
  );
}
