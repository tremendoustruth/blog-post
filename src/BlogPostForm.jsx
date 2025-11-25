import React, { useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router";
import styles from './BlogPostForm.module.css';


const BlogPostForm = ({ post, onSubmit }) => {
    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.content || '');
    const [author, setAuthor] = useState(post?.author || '');
    const [date, setDate] = useState(post?.date || '');
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        console.log("handleSubmit is being called")
        e.preventDefault();
        const newErrors = {};
        if (!title) newErrors.title = 'Required';
        if (!content) newErrors.content = 'Required';
        if (!author) newErrors.author = 'Required';
        if (!date) newErrors.date = 'Required';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("We made it to OnSubmit")
            onSubmit({ title, content, author, date, id: post?.id });
        }
    };
    return (
        <>
            <form className={styles.blogPostForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="title">Title:</label>
                    <input
                        className={styles.input}
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <p className={styles.error}>{errors.title}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="title">Author:</label>
                    <input
                        className={styles.input}
                        id="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    {errors.author && <p className={styles.error}>{errors.author}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="date">Date: </label>
                    <DatePicker
                        id='date'
                        className={styles.input}
                        wrapperClassName={styles.datePicker}
                        popperPlacement='top-end'
                        popperClassName={styles.popper}
                        selected={date ? new Date(date) : null}
                        onChange={(d) => setDate(d.toISOString().split("T")[0])}
                    />
                    {errors.date && <p className={styles.error}>{errors.date}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="title">Content:</label>
                    <SunEditor
                        className={styles.input}
                        setContents={content}
                        onChange={setContent}
                    />
                    {errors.content && <p className={styles.error}>{errors.content}</p>}

                </div>
                <div className={styles.submitWrapper}>
                    <button className={styles.submit} type="submit">Submit</button>
                </div>
            </form>
            <Link to="/" className={styles.link}>Home
            </Link>
        </>
    );
};
export default BlogPostForm;