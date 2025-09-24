import { useState } from 'react';

export default function ListTest() {
  const [text, setText] = useState();
  const [list, setList] = useState([]);
  const [editText, setEditText] = useState(null);

  function handleList() {
    if (editText !==null) {
      const updatedList = [...list];
      updatedList[editText] = text;
      setList(updatedList);
      setEditText(null);
    } else {
      setList([...list, text]);
    }
    
    setText(' ');
  }
  function handleDelete(index) {
    setList(list.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setText(list[index]);
    setEditText(index);
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
        <button className="btn-rounded" onClick={handleList}>
          {editText !== null ? 'Update' : 'Submit'}
        </button>
      </p>
      {list.map((items, index) => (
        <li key={index}>
          {items}
          <button className='btn-rounded' onClick={()=>handleEdit(index)}>Edit</button>
          <button
            className="btn-rounded btn-rounded-delete"
            onClick={() => {
              handleDelete(index);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
}
