
import BlogPostItem from "./BlogPostItem";
import React from "react";
import styles from "./BlogPostList.module.css";

function BlogPostList({ posts }) {

    if (posts.length === 0) {
        return <p>No blog posts available.</p>
    }

    return (
        <main>
            <h1>Blog Post List!</h1>
            <div className={styles.blogPostList}>
                {posts.map((post) => (
                    <BlogPostItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        summary={post.summary}
                        date={post.date}
                        url={post.url} />
                ))}
            </div>
        </main>
    )

}

export default BlogPostList


