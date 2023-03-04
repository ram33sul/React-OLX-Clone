import React, {useState} from 'react'
import styles from './login.module.css'
import { useContext } from 'react';
import { firebaseContext } from '../../store/firebase_context';
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const {Firebase} = useContext(firebaseContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailInput = (e)=>{
        setEmail(e.target.value);
    }
    const passwordInput = (e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            navigate('/');
        }).catch(err => {
            alert(err.message); 
        });
    }
  return (
    <div className={styles.container}>
        <img src={require('../../resources/olx-logo.png')} alt="olx-logo" style={{width: '200px'}} />
        <form onSubmit={handleSubmit}>
        <div className={styles.section1}>
            <div className={styles.fieldName}>
                Email
            </div>
            <input name='email' value={email} className={styles.input} onChange={emailInput}/>
        </div>
        <div className={styles.section1}>
            <div className={styles.fieldName}>
                Password
            </div>
            <input name='password' type='password' value={password} className={styles.input} onChange={passwordInput} />
        </div>
        <button className={styles.loginButton}>
            Login
        </button>
        </form>
        <button className={styles.signupButton} onClick={()=>{navigate('/signup')}}>
            Signup
        </button>
    </div>
  )
}

export default Login