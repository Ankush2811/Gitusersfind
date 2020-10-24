import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const ShortContext = createContext(null);

const ShortContextProvider = (props) => {
  const [shortlist, setShortlist] = useState([
    {name: 'Ankush Soni', login: 'Ankush2811', id: 1},
    
  ]);
  const addUser = (name, login) => {
    setShortlist([...shortlist, {name, login, id: uuid()}]);
  };
  const removeUser = (id) => {
    setShortlist(shortlist.filter(user => user.id !== id));
  }

  return (
    <ShortContext.Provider value={{ shortlist, addUser, removeUser }}>
      {props.children}
    </ShortContext.Provider>
  );
}
 
export default ShortContextProvider;