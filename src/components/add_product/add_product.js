import React from 'react'
import { useState } from 'react'
import styles from './add_product.module.css'
function AddProduct() {
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
        <div className={styles.section}>
            <div className={styles.label}>
                Name
            </div>
            <input name='name' className={styles.input} value={name} onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className={styles.section}>
            <div className={styles.label}>
                Category
            </div>
            <input name='category' className={styles.input} value={category} onChange={(e)=>{setCategory(e.target.value)}} />
        </div>
        <div className={styles.section}>
            <div className={styles.label}>
                Price
            </div>
            <input type='password' name='price' className={styles.input} value={price} onChange={(e)=>{setPrice(e.target.value)}} />
        </div>
        <div className={styles.section}>
            <input type='file' className={styles.imageInput} value={image} onChange={(e)=>{setImage(e.target.value)}} />
        </div>
        <button className={styles.button}>
            Post product
        </button>
        </form>
    </div>
  )
}

export default AddProduct