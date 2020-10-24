import React,{useState,useEffect,useContext} from 'react';
import styles from'./App.module.css';
import short from './shortlist';
import axios from 'axios';
import ShortContextProvider from './shortcontext'
import Shortlist from './shortlist'
import NewUser from './newuser'
import { ShortContext } from './shortcontext'

function App() {
  const { addUser } = useContext(ShortContext);
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(false);
  
  useEffect(() => {
    axios.get('https://api.github.com/users/Ankush2811')
    
    .then(res =>{
      
      setData(res.data)
    })
    .catch((err) => {
      
      setError(true);
      console.error(err);
    })
  },[]);
  const setData=({name,login,followers,public_repos,avatar_url}) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };
  
  const handleSearch = (e) =>{
    setUserInput(e.target.value)
  }
  const handleSubmit= (e) => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${userInput}`)
    
    .then(res => {
      if (res.data.message){
        setError(res.data.message);
      } else{
        
        setData(res.data);
        setError(null);
      }
    })
    .catch((err )=> {
      
      setError(true);
      console.error(err);
    });
  }
  
  return (
    <>
    <div className={styles.navbar}>Github Search</div>
    <div className={styles.all}>
      
      <div className={styles.search} >
        <form className={styles.form} onSubmit={handleSubmit}>
              
              <input className={styles.input} type="text" name="github user" placeholder="Github Users" onChange={handleSearch} />
              <button className={styles.button} type="submit">Search</button>
        </form>
      </div>
      {error ? (<h1>Not Found</h1>) : (
        <div className={styles.card}>
          <img className={styles.cardimage} src={avatar}/>
            <div className={styles.cardcontent} >
                <h3 className={styles.cardtitle}>{name}</h3>
                <h3 className={styles.cardtitle}>Username:{userName}</h3>
                <p><small>Followers: {followers}</small></p>
                <p><small>Repos: {repos}</small></p>
                <button className={styles.btn} type="submit" onClick={() => addUser(userName)}>
                  ShortList
                </button>
            </div>
          </div>
      )}
      
        
        <Shortlist />
        
      

    </div>
  </>
  );
}

export default App;
