import { Link } from "react-router";
import React from "react";
import styles from "./BlogPostDetail.module.css"
import dateTransformer from "./utilities";

export default function BlogPostDetail({ title, author, date, content, id }) {

    if (!title || !content || !author || !date) {
        return <p>Oh no! Something has gone awry! Blog post fatally unfound.</p>;
    }
    return (
        <article className={styles.blogPostDetail}>
            <Link to="edit" className={styles.link}>
                <button className={styles.edit}>Edit</button>
            </Link>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.author}>By: {author}</p>
            <p className={styles.date}>Published on: {dateTransformer(date)}</p>
            <div className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}>
            </div>
            <Link to="/" className={styles.link}>Home</Link>
        </article>
    )
}


