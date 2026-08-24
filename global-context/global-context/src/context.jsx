import {createContext, useState, useContext} from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}

const AppContext = ({children}) => {

  const [name, setName] = useState('Peter');

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;