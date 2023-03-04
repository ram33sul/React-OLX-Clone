import React from 'react'
import styles from './dropdown.module.css';
function Dropdown() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <img src={require('../../resources/search-icon.png')} alt='search_icon' style={{width:'20px'}}/>
        India
      </div>
        <img src={require('../../resources/dropdown-arrow.png')} alt='arrow' style={{width:'20px'}}></img>
    </div>
  )
}

export default Dropdown