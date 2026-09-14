import {useState, useReducer} from 'react';
import { reducer, defaultState } from './reducer';
import { REMOVE_ITEM, CLEAR_LIST, RESET_LIST } from './actions';

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, payload: id })
  };

  const clearList = () => {
    // setPeople([]);
    dispatch({ type: CLEAR_LIST })
  }

  const resetList = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST })
  }

console.log(state);
  return (
    <div>
      {state.people.length > 0 ? (
        <>
          {state.people.map((person) => {
            const { id, name } = person;
            return (
              <div key={id} className='item'>
                <h4>{name}</h4>
                <button onClick={() => removeItem(id)}>remove</button>
              </div>
            );
          })}
          <button
            className='btn'
            style={{ marginTop: '2rem' }}
            onClick={clearList}
          >
            clear items
          </button>
        </>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics
