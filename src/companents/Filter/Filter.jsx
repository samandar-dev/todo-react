import React from 'react';

function Filter({ setCategor }) {

  const sortBtnsFunc = (e) => {
    setCategor(e.target.id)
  }

  return (
    <div className="tudu__btn-box d-flex justify-content-between align-items-center">
      <button className="tudu__btn" id="all" onClick={sortBtnsFunc}>All</button>
      <button className="tudu__btn" id="complete" onClick={sortBtnsFunc}>Complete</button>
      <button className="tudu__btn" id="incomplete" onClick={sortBtnsFunc}>Incomplete</button>
    </div>
  );
}

export default Filter;
