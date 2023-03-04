import React from 'react'
import styles from './product_card.module.css';
function ProductCard({imageName, price, name, description}) {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <img src={'./'+imageName} alt='product' style={{height: '100%'}} />
            <img src={require('../../resources/heart-icon.png')} alt='like' className={styles.heartIcon} />
        </div>
        <div className={styles.price}>
            ₹ {price}
        </div>
        <div className={styles.name}>
            {name}
        </div>
        <div className={styles.description}>
            {description}
        </div>
    </div>
  )
}

export default ProductCard