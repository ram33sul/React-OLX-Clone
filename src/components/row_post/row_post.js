import React from 'react';
import ProductCard from '../product_card/product_card';
import styles from './row_post.module.css';
function RowPost() {
  return (
    <div className={styles.container}>
        Based on your last search
        <div className={styles.row}>
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

export default RowPost;