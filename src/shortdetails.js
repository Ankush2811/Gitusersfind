import React, { useContext } from 'react';
import { ShortContext } from './shortcontext';
import styles from './shortdetail.module.css'

const ShortDetails = ({ user }) => {
  const { removeUser } = useContext(ShortContext);
  return (
    <li onClick={() => removeUser(user.id)} className>
      <div className={styles.title}>{user.name}</div>
      
    </li>
  );
}

export default ShortDetails;