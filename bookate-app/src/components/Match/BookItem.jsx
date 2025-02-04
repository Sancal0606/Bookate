import React, { useState } from 'react'
import styles from './BookItem.module.css'




const BookItem = ({author,title}) => {
    
  return (
    <div className={styles.item}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.author}>{author} </h2>
    </div>
  )
}

export default BookItem
