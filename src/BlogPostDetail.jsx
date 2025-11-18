import { Link } from "react-router";
import React from "react";
import styles from "./BlogPostDetail.module.css"


export default function BlogPostDetail({title, author, formattedDate, content}){
    
    if (!title || !content || !author || !formattedDate) {
        return <p>Blog post not found.</p>;
    }
    
    return  (
        <div>
        <article className={styles.blogPostDetail}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.author}>By: {author}</p>
        <p classname={styles.date}>Published on: {formattedDate}</p>
        <div className={styles.content}>{content}</div>
        <Link to="/" className={styles.link}>Home</Link>
        </article>
        </div>
    )
}

