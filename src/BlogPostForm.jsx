import React, { useState } from 'react';
import styles from './BlogPostForm.module.css';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router";


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
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <p className={styles.error}>{errors.title}</p>}

                    <label htmlFor="title">Author:</label>
                    <input
                        id="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    {errors.author && <p className={styles.error}>{errors.author}</p>}
                    <label htmlFor="title">Date:</label>
                    <DatePicker
                        selected={date ? new Date(date) : null}
                        onChange={(d) => setDate(d.toISOString().split("T")[0])}
                    />
                    <label htmlFor="title">Content:</label>
                    <SunEditor
                        setContents={content}
                        onChange={setContent}
                    />
                    {errors.content && <p className={styles.error}>{errors.content}</p>}

                </div>
                {/* Other form fields similarly */}
                <button type="submit">Submit</button>

            </form>
            <Link to="/" className={styles.link}>Home
            </Link>
        </>
    );
};
export default BlogPostForm;