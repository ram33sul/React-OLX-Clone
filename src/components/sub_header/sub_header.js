import React from 'react'
import styles from './sub_header.module.css';
function SubHeader() {
    const categories = [
        'Cars','Motorcycles','Mobile Phone','For Sale: House & Apartments','Scooters','Commercial & Other Vehicles','For Rent: Houses & Apartments' 
    ]
  return (
    <div className={styles.container}>
        <div className={styles.dropdown}>
            ALL CATEGORIES
            <img src={require('../../resources/dropdown-arrow.png')} alt="arrow" style={{width: '20px'}} />
        </div>
        <div className={styles.categories}>
            {categories.map((data) => {
                return (
                <span key={data}>
                    {data}
                </span>
                )
            })}
        </div>
    </div>
  )
}

export default SubHeader;