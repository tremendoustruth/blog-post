import React, { useState } from 'react';
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router";
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import BlogPostList from './BlogPostList'
import initialPosts from './posts.js'
import BlogPostDetail from "./BlogPostDetail.jsx"
import BlogPostForm from './BlogPostForm.jsx';



function PostSelector({ posts, onDelete }) {
  const { id } = useParams()
  const post = posts.find(post => post.id === id)
  return <BlogPostDetail {...post} id={id} onDelete={onDelete} />
}

function EditPost({ posts, onSubmit }) {
  const { id } = useParams()
  const post = posts.find(post => post.id === id)
  return <BlogPostForm post={post} onSubmit={onSubmit} />
}

// function maxIDFinder(posts) {
//   posts.reduce()
// }

function App() {
  const [posts, setPosts] = useState(initialPosts)

  function handleDeletePost(id) {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }

  function handlePostSubmit(updatedPost) {
    console.log(updatedPost)
    console.log("Am I being called?")
    // We want to produce a new posts array here
    const targetIndex = posts.findIndex(post => post.id === updatedPost.id);
    let newPosts = []
    if (targetIndex === -1) {
      console.log("in the if block")
      let newID = posts.length + 1. // consider changing this in the future to find max id with reduce
      updatedPost.id = newID.toString()
      newPosts = [...posts, updatedPost]
    }
    else {
      console.log("in the else block")
      newPosts = posts.map(post => post.id === updatedPost.id ? updatedPost : post)
    }

    setPosts(newPosts)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogPostList posts={posts} />} />
        <Route path="/post/:id" element={<PostSelector posts={posts} onDelete={handleDeletePost} />} />
        <Route path="/post/:id/edit" element={<EditPost posts={posts} onSubmit={handlePostSubmit} />} />
        <Route path="/post/create" element={<BlogPostForm onSubmit={handlePostSubmit} />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
