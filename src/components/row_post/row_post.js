import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from '../product_card/product_card';
import styles from './row_post.module.css';
function RowPost() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const lastClicks =JSON.parse(localStorage.getItem('lastClicks'));
        if(lastClicks){
            setPosts(lastClicks);
        }
    },[])
  return (
    <div className={styles.container}>
        Based on your last search
        <div className={styles.row}>
            {
                posts.map((data) => {
                    return <ProductCard imageUrl={data.url} name={data.name} price={data.price} category={data.category} key={data.id} id={data.id} userId={data.userId} createdAt={data.createdAt}/>
                })
            }
        </div>
    </div>
  )
};

export default RowPost;