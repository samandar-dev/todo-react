import React from 'react'

function List({ setObject, obj, newObjArr }) {
  const deleteItme = (id) => {
    setObject(obj.filter((el) => id !== el.id))
  }

  const complete_incomplete = (id) => {
    setObject(
      obj.map((itm, i) => {
        if (id === i + 1) {
          return {
            ...itm,
            categor: !itm.categor
          }
        }
        return itm
      })
    )
  }

  return (
    <ul className="tudu__list" id="list">
      {newObjArr.map((itm, i) => (
        <li className='tudu__item anim_item' key={i + 1}>
          <p className={`tudu__item_tit ${itm.categor === true ? 'tit' : ''}`}
            id={i + 1}
            onClick={() => complete_incomplete(i + 1)}
          >{itm.name}</p>
          <button className='tudu__item_btn' onClick={() => deleteItme(itm.id)}>
            <i className='bx bx-x'></i>
          </button>
        </li>
      ))
      }
    </ul >
  )
}

export default List
