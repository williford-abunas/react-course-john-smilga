import {data} from '../../../data.js';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  const clearList = () => {
    setPeople([]);
  }

  return (
    <><ul>
      {people.map((person) => {
        return <><li key={person.id}>{person.name}<button onClick={() => removeItem(person.id)}>Remove</button></li></>;

      })}
    </ul><button onClick={clearList}>Clear List</button></>
  );

   
};

export default UseStateArray;
