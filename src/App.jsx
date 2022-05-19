import React, { useState, useEffect } from 'react';
import Filter from './companents/Filter/Filter';
import Input from './companents/Input/Input';
import List from './companents/List/List';
import './App.scss';

function App() {
  const [inpValue, setInpValue] = useState("");
  const [object, setObject] = useState([])
  const [newObjArr, setNewObjArr] = useState([])
  const [categor, setCategor] = useState('all')

  const sortHander = () => {
    switch (categor) {
      case 'complete':
        setNewObjArr(object.filter(itm => itm.categor === true))
        break;
      case 'incomplete':
        setNewObjArr(object.filter(itm => itm.categor === false))
        break;
      default:
        setNewObjArr(object)
        break;
    }
  }

  useEffect(() => {
    sortHander()
  }, [object, categor]);

  return (
    <section className="section tudu">
      <div className="tudu__list-box">
        <Input setinpVal={setInpValue} object={object} setObject={setObject} inpVal={inpValue} />
        <List obj={object} setObject={setObject} newObjArr={newObjArr} />
        <Filter setCategor={setCategor} />
      </div>
    </section>
  );
}

export default App;
