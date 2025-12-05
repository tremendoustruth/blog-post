import React, { useState } from 'react';
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router";
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import BlogPostList from './BlogPostList'
import initialPosts from './posts.js'
import BlogPostDetail from "./BlogPostDetail.jsx"
import BlogPostForm from './BlogPostForm.jsx';
import Layout from "./Layout.jsx"


function PostSelector({ posts, onDelete, onSubmit }) {
  const { id } = useParams()
  const post = posts.find(post => post.id === id)
  console.log(post.comments)
  return (
    <>
      <BlogPostDetail {...post} id={id} onDelete={onDelete} onSubmit={onSubmit} comments={post.comments} />
    </>
  )
}

function EditPost({ posts, onSubmit }) {
  const { id } = useParams()
  const post = posts.find(post => post.id === id)
  return <BlogPostForm post={post} onSubmit={onSubmit} />
}


function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("")
  //calculate posts, we don't want to throw away our filtered posts ever
  let filteredPosts;
  if (search) {
    const searchTerm = search.toLowerCase()
    filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.summary.toLowerCase().includes(searchTerm) ||
      post.content.replace(/<.*>/g, " ").toLowerCase().includes(searchTerm) ||
      parseInt(post.id) == searchTerm
    )
  } else {
    filteredPosts = posts
  }
  function handleSearch(query) {
    console.log("sanity check")
    setSearch(query)
  }

  function handleDeletePost(id) {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }

  function handleAddComment(id, name, text, date) {
    console.log("sanity")
    const post = posts.find(post => post.id === id)
    const targetIndex = posts.findIndex(post => post.id === id);
    const newComment = {
      name,
      text,
      date
    }
    const newComments = [...post.comments, newComment]
    const newPost = { ...post, comments: newComments }
    const newPosts = posts.toSpliced(targetIndex, 1, newPost)
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
      <Layout onSearch={handleSearch}>
        <Routes>
          <Route path="/" element={<BlogPostList posts={filteredPosts} />} />
          <Route path="/post/:id" element={<PostSelector posts={posts} onDelete={handleDeletePost} onSubmit={handleAddComment} />} />
          <Route path="/post/:id/edit" element={<EditPost posts={posts} onSubmit={handlePostSubmit} />} />
          <Route path="/post/create" element={<BlogPostForm onSubmit={handlePostSubmit} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}


export default App
