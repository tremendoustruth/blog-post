import React, { useState } from 'react';
import { Link } from "react-router";
import styles from './CommentForm.module.css';


const CommentForm = ({ isLoggedIn, userName, onSubmit, id }) => {
    const [name, setName] = useState('');
    if (isLoggedIn) { setName(userName); }
    const [text, setText] = useState('');
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        const date = new Date();
        e.preventDefault();
        const newErrors = {};
        if (!name.trim()) newErrors.name = 'Required';
        if (!text.trim()) newErrors.text = 'Required';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("We made it to OnSubmit")
            onSubmit(id, name, text, date);
        }
    };
    return (
        <>
            <form className={styles.commentForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <h1>Add a comment:</h1>
                    <label className={styles.label} htmlFor="name">Name:</label>
                    <input
                        className={styles.input}
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        className={styles.textarea}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    {errors.text && <p className={styles.error}>{errors.text}</p>}
                </div>
                <div className={styles.submitWrapper}>
                    <button className={styles.submit} type="submit">Submit</button>
                </div>
            </form>
        </>
    );
};
export default CommentForm;