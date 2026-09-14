import { data } from '../../../data';
import { REMOVE_ITEM, CLEAR_LIST, RESET_LIST } from './actions';

export const defaultState = {
  people: data,
};

export const reducer = (state, action) => {
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter((person) => person.id !== action.payload);
    return { ...state, people: newPeople };
  }
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  throw new Error(`no matching ${action.type} action type`);
};
