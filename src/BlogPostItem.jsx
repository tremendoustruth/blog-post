import React from "react";
// import { Link } from "react-router";
import styles from "./BlogPostItem.module.css";


function BlogPostItem({title, summary, date, url}) {

    return (
        <div className={styles.blogPostItem}>
        <article>
        {/* <Link to={url}><h2>{title}</h2></Link> */}
        <a href={url} className={styles.title}>
            <h2>{title}</h2>
        </a>
        <p className={styles.summary}>{summary}</p>
        <p className={styles.date}>Published on: {date}</p>
        </article>
        </div>
    )
}

export default BlogPostItem