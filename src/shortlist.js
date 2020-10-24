import React, { useContext } from 'react';
import ShortDetails from './shortdetails'
import { ShortContext } from './shortcontext';
import styles from './shortlist.module.css';

const ShortList = () => {
  const { shortlist } = useContext(ShortContext);
  return shortlist.length ? (
    <div className={styles.short}>
      <h2>ShortListed Users List</h2>
      <p>You have {shortlist.length} users shortlisted</p>
      <h6>(You can delete the user by clicking on the user you want to delete)</h6>  
      <ul>
        {shortlist.map(user => {
          return ( <ShortDetails user={user} key={user.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className={styles.empty}>No users shortlisted</div>
  );
}

export default ShortList;