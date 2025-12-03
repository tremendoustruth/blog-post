import React from "react";
import { Link } from "react-router";
import styles from "./Comment.module.css";
import dateTransformer from "./utilities";


function Comment({ name, date, text }) {

    return (
        <div className={styles.comment}>
            <p className={styles.name}>{name}</p>
            <p className={styles.date}>Comment posted on: {dateTransformer(date)}</p>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Comment