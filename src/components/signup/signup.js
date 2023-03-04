import React from 'react'
import { useState, useContext } from 'react'
import { firebaseContext } from '../../store/firebase_context';
import { useNavigate } from 'react-router-dom'
import styles from './signup.module.css'
function Signup() {
    const navigate = useNavigate()
    const {Firebase} = useContext(firebaseContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const usernameInput = (e)=>{
        setUsername(e.target.value);
    }
    const emailInput = (e)=>{
        setEmail(e.target.value);
    }
    const phoneInput = (e)=>{
        setPhone(e.target.value);
    }
    const passwordInput = (e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Firebase.auth().createUserWithEmailAndPassword(email,password).then((result) => {
            result.user.updateProfile({displayName: username}).then (()=>{
                Firebase.firestore().collection('users').add({
                    id: result.user.uid ,
                    username: username,
                    phone: phone,
                    email: email,
                }).then(()=>{
                    navigate('/login');
                }).catch(err=>{alert(err.message)})
            }).catch(err=>err.message);
        }).catch(err=>{alert(err.message)});
    }
  return (
    <div className={styles.container}>
        <img src={require('../../resources/olx-logo.png')} alt="olx-logo" style={{width: '200px'}} />
        <form onSubmit={handleSubmit}>
        <div className={styles.section1}>
            <div className={styles.fieldName}>
                Username
            </div>
            <input name='username' value={username} className={styles.input} onChange={usernameInput} required/>
        </div>
        <div className={styles.section1}>
            <div className={styles.fieldName}>
                Email
            </div>
            <input name='email' value={email} className={styles.input} onChange={emailInput} required/>
        </div>
        <div className={styles.section1}>
            <div className={styles.fieldName}>
                Phone
            </div>
            <input name='phone' value={phone} className={styles.input} onChange={phoneInput} required/>
        </div>
        <div className={styles.section1}>
            <div className={styles.fieldName}>
                Password
            </div>
            <input name='password' type='password' value={password} className={styles.input} onChange={passwordInput} required/>
        </div>
        <button className={styles.signupButton}>
            Signup
        </button>
        </form>
        <button className={styles.loginButton} onClick={()=>{navigate('/login')}}>
            Login
        </button>
    </div>
  )
}

export default Signup;