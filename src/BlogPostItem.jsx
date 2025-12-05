import React from "react";
import { Link } from "react-router";
import styles from "./BlogPostItem.module.css";
import { dateTransformer } from "./utilities";


function BlogPostItem({ title, summary, date, id }) {

    return (
        <div className={styles.blogPostItem}>
            <article>
                <Link to={`/post/${id}`} className={styles.title}><h2>{title}</h2></Link>
                <p className={styles.summary}>{summary}</p>
                <p className={styles.date}>Published on: {dateTransformer(date)}</p>
            </article>
        </div>
    )
}

export default BlogPostItem