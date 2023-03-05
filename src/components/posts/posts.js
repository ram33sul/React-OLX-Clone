import React from 'react';
import styles from './posts.module.css';
import ProductCard from '../product_card/product_card';
import { useContext } from 'react';
import { firebaseContext } from '../../store/firebase_context';
import { useState } from 'react';
import { useEffect } from 'react';
function Posts() {
    const {Firebase} = useContext(firebaseContext);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        Firebase.firestore().collection('products').get().then((snapshot) => {
            const allPost = snapshot.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id
                }
            });
            setProducts(allPost);
        })
    },[Firebase])
  return (
    <div className={styles.container}>
        Fresh Recommendations
        <div className={styles.posts}>
            {
                products.map((data) => {
                    return <ProductCard imageUrl={data.url} name={data.name} price={data.price} category={data.category} key={data.id} id={data.id} userId={data.userId} createdAt={data.createdAt}/>
                })
            }
        </div>
    </div>
  )
};

export default Posts;