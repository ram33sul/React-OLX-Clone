import React from 'react';
import { useEffect, useContext } from 'react';
import styles from './product_details.module.css';
import { product_details } from '../../store/product_context';
import { useState } from 'react';
import { firebaseContext } from '../../store/firebase_context';
function ProductDetails() {
    const {product} = useContext(product_details);
    const [userDetails, setUserDetails] = useState(null);
    const {Firebase} = useContext(firebaseContext);
    useEffect(()=>{
        Firebase.firestore().collection('users').where('id','==',product?.userId).get().then((res) => {
            res.forEach(doc => {
                setUserDetails(doc.data());
            })
        })
    },[Firebase, product])
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <img src={product?.url} alt='product' style={{width: '50vw'}} />
        </div>
        <div className={styles.section}>
            <div className={styles.section1}>
            <h3 style={{color: 'darkcyan'}}>Product Details</h3>
                Name: {product?.name} <br />
                category: {product?.category} <br />
                price: {product?.price} <br />
                posted on : {product?.createdAt}
            </div>
            <div className={styles.section1}>
                <h3 style={{color: 'darkcyan'}}>Seller Details</h3>
                username: {userDetails?.username} <br />
                phone: {userDetails?.phone}
            </div>
        </div>
    </div>
  )
};

export default ProductDetails;