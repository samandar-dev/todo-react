import React from 'react';

function Input({ setinpVal, setObject, object, inpVal }) {
  const submitFunc = (e) => {
    setinpVal(e.target.value)
  }

  const addItemsHander = (e) => {
    e.preventDefault();

    if (inpVal !== "") {
      setObject([...object, {
        id: Math.random() * 1000,
        name: inpVal,
        categor: false,
      }])
    }
    setinpVal("")
  }

  return (
    <form className="tudu__form" id="form">
      <input className="tudu__input"
        onChange={submitFunc}
        value={inpVal}
        type="text" name="text"
        id="tudu__input"
        required />
      <button className="tudu__form-btn" onClick={addItemsHander}>Add</button>
    </form>
  );
}

export default Input;
