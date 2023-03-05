import React from 'react'
import { useState } from 'react'
import styles from './add_product.module.css'
import { firebaseContext, AuthContext } from '../../store/firebase_context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
function AddProduct() {
    const navigate = useNavigate();
    const {Firebase} = useContext(firebaseContext);
    const {user} = useContext(AuthContext);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        Firebase.storage().ref('/image/'+image.name).put(image).then(({ref}) => {
            ref.getDownloadURL().then((url) => {
                const date = new Date();
                Firebase.firestore().collection('products').add({
                    name,
                    category,
                    price,
                    url,
                    userId: user.uid,
                    createdAt: date.toDateString(),
                }).then(()=>{
                    navigate('/');
                }).catch((err) => {
                    alert(err.message);
                })
            }).catch((err) => {
                alert(err.message);
            })
        }).catch((err) => {
            alert(err.message);
        })
    };
  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
        <div className={styles.section}>
            <div className={styles.label}>
                Name
            </div>
            <input name='name' className={styles.input} value={name} onChange={(e)=>{setName(e.target.value)}} required/>
        </div>
        <div className={styles.section}>
            <div className={styles.label}>
                Category
            </div>
            <input name='category' className={styles.input} value={category} onChange={(e)=>{setCategory(e.target.value)}} required />
        </div>
        <div className={styles.section}>
            <div className={styles.label}>
                Price
            </div>
            <input type='number' name='price' className={styles.input} value={price} onChange={(e)=>{setPrice(e.target.value)}} required/>
        </div>
        <img src={image && URL.createObjectURL(image)} alt="posts" style={{width: '100px', maxHeight: '100px'}} />
        <div className={styles.section}>
            <input type='file' className={styles.imageInput} onChange={(e)=>{setImage(e.target.files[0])}} />
        </div>
        <button className={styles.button}>
            Post product
        </button>
        </form>
    </div>
  )
}

export default AddProduct