import React from "react";
import { Link } from "react-router";
import styles from "./Comment.module.css";
import { dateAndTimeGenerator } from "./utilities";


function Comment({ name, date, text }) {

    return (
        <div className={styles.comment}>
            <div className={styles.commentHead}>
                <p className={styles.name}>{name}</p>
                <p className={styles.date}>Posted on: {dateAndTimeGenerator(date)}</p>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Comment