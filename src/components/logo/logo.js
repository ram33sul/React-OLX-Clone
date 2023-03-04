import React from 'react';
import styles from './logo.module.css';

function Logo({width}) {
  return (
    <div className={styles.container}>
        <img style={{width : width || '50px'}} src={require('../../resources/olx-logo.png')} className={styles.image} alt="olx-logo"></img>
    </div>
  )
}

export default Logo;