import { Link } from "react-router";
import React from "react";
import styles from "./Post.module.css"

export default function Post({title, date, author}){
    return  (
        <div>
        <article className={styles.postItem}>
        <h2>{title}</h2>
        <p>Written by: {author}</p>
        <p>Published on: {date}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, omnis. Facere distinctio, esse dolores nihil delectus sapiente, dolore, mollitia reprehenderit voluptatibus deserunt harum. Repellendus natus facilis eligendi impedit error. Praesentium!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, omnis. Facere distinctio, esse dolores nihil delectus sapiente, dolore, mollitia reprehenderit voluptatibus deserunt harum. Repellendus natus facilis eligendi impedit error. Praesentium!</p>
        <Link to="/">Home</Link>
        </article>
        </div>
    )
}

