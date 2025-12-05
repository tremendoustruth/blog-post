import { Link, useNavigate } from "react-router";
import React from "react";
import styles from "./BlogPostDetail.module.css"
import { dateTransformer } from "./utilities";
import DeleteButton from "./DeleteButton";
import ConfirmationDialog from "./ConfirmationDialog";
import { useState, useEffect } from "react";
import BlogPostList from "./BlogPostList";
import CommentList from "./CommentList.jsx"
import CommentForm from "./CommentForm.jsx"

export default function BlogPostDetail({ title, author, date, content, id, onDelete, comments, isLoggedIn, userName, onSubmit }) {


    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const navigate = useNavigate();

    function openDialog() {
        setIsDialogOpen(true);
    }

    function closeDialog() {
        setIsDialogOpen(false);
    }

    function handleConfirmDelete() {
        onDelete(id);
        setIsDialogOpen(false);
        navigate("/");
    }

    if (!title || !content || !author || !date) {
        return <p>Oh no! Something has gone awry! Blog post fatally unfound.</p>;
    }
    return (
        <div>
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
                <ConfirmationDialog
                    isOpen={isDialogOpen}
                    onClose={closeDialog}
                    onConfirm={handleConfirmDelete}
                    closeDialog={closeDialog}
                />
                <DeleteButton onClick={openDialog} />
            </article>
            <article className={styles.commentSection}>
                <CommentList comments={comments} />
                <CommentForm
                    isLoggedIn={isLoggedIn}
                    userName={userName}
                    id={id}
                    onSubmit={onSubmit} />
            </article>
        </div>
    )
}


