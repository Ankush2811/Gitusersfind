import React, { useContext, useState } from 'react';
import { ShortContext } from './shortcontext';
import styles from './newuser.module.css'
const NewUser = () => {
  const { addUser } = useContext(ShortContext);
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    addUser(name,login);
    setName('');
    setLogin('');
    
  }

  return (
    <div className={styles.main}>
        <form onSubmit={handleSubmit}>
        
        <input className={styles.inp} type="text" placeholder="Type user name..." value={name}
            onChange={(e) => setName(e.target.value)} />
        <input className={styles.bt}type="submit" value="adduser"/>
        
        </form>
    </div>
  );
}
 
export default NewUser;