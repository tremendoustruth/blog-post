import Comment from "./Comment";
import React from "react";
import styles from "./CommentList.module.css";
import { Link } from "react-router"

function CommentList({ comments }) {

    if (comments.length === 0) {
        return <p>There are currently no comments.</p>
    }

    return (
        <>
            <h1>Comments</h1>
            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment
                        name={comment.name}
                        date={comment.date}
                        text={comment.text}
                    />
                ))}
            </div>
        </>
    )

}

export default CommentList;