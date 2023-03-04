import React from 'react';
import styles from './posts.module.css';
import ProductCard from '../product_card/product_card';
function Posts() {
  return (
    <div className={styles.container}>
        Fresh Recommendations
        <div className={styles.posts}>
        <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
            <ProductCard imageName='product.png' name='maruti swift' price='7,50,000' description='hello'/>
        </div>
    </div>
  )
};

export default Posts;