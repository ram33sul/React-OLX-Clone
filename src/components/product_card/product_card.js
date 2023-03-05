import React from 'react'
import styles from './product_card.module.css';
import { useContext } from 'react';
import { product_details } from '../../store/product_context';
import { useNavigate } from 'react-router-dom';
function ProductCard({imageUrl, price, name, category, id, userId, createdAt}) {

    const navigate = useNavigate();
    const {setProduct} = useContext(product_details)
    const data = {
        name,
        price,
        category,
        url: imageUrl,
        id,
        userId,
        createdAt,
    }
    const handleCardClick = ()=>{
        let lastClicks = JSON.parse(localStorage.getItem('lastClicks'));
        if(!lastClicks){
            lastClicks = [data];
        }
        else{
            const index = lastClicks.findIndex((data) => {return data.id === id});
            if(index !== -1){
                for(let i = index; i > 0; i--){
                    lastClicks[i] = lastClicks[i-1];
                }
                lastClicks[0] = data;
            } else {
                if(lastClicks.length >= 10){
                    lastClicks.pop();
                }
                lastClicks = [data,...lastClicks];
            }
        }
        localStorage.setItem('lastClicks',JSON.stringify(lastClicks));
        setProduct(data);
        navigate('/productDetails');
    }
  return (
    <div className={styles.container} onClick={handleCardClick}>
        <div className={styles.imageContainer}>
            <img src={imageUrl} alt='product' style={{height: '100%', maxWidth: '100%'}} />
            <img src={require('../../resources/heart-icon.png')} alt='like' className={styles.heartIcon} />
        </div>
        <div className={styles.price}>
            ₹ {price}
        </div>
        <div className={styles.name}>
            {name}
        </div>
        <div className={styles.description}>
            {category}
        </div>
    </div>
  )
}

export default ProductCard