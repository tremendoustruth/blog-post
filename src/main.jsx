import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogPostDetail from "./BlogPostDetail.jsx"
import posts from "./posts.js"

function PostSelector() {
  const { id } = useParams()
  const post = posts.find(post => post.id === id)
  return <BlogPostDetail {...post} />

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App posts={posts} />} />
        <Route path="/post/:id" element={<PostSelector />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

// https://reactrouter.com/start/declarative/routing#dynamic-segments