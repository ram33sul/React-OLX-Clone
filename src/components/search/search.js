import React from 'react'
import styles from './search.module.css'
function Search() {
  return (
    <div className={styles.container}>
        <input placeholder='Find Cars, Mobile Phones and more...' className={styles.input} />
        <div className={styles.searchButton}>

        </div>
    </div>
  )
}

export default Search