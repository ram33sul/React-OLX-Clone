import React from 'react';
import Logo from '../logo/logo';
import LocationDropdown from '../location_dropdown/dropdown';
import Search from '../search/search';
import styles from './header.module.css'
import { useContext } from 'react';
import { AuthContext, firebaseContext } from '../../store/firebase_context';
import { useNavigate } from 'react-router-dom';
function Header() {
    const {user} = useContext(AuthContext);
    const {Firebase} = useContext(firebaseContext);
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
        <Logo />
        <LocationDropdown />
        <Search />
        <div className={styles.languageContainer}>
            <span style={{fontWeight: 'bold'}}> ENGLISH </span>
            <img src={require('../../resources/dropdown-arrow.png')} alt='arrow' style={{width: '20px'}} />
        </div>
        <span className={styles.loginButton}>
            {user ? user.displayName : 'LOGIN'}
        </span>
        {user && <span style={{cursor: 'pointer'}} onClick={()=>{ Firebase.auth().signOut(); navigate('/login')}}> LOGOUT </span>}
        <div className={styles.sellButton} onClick={()=>{navigate('/sell')}}>
            +SELL
        </div>
    </div>
  )
}

export default Header;