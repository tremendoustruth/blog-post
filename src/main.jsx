import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Post from "./Post.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/post" element={<Post title="Title of Post" date="November 18, 2025" author="Bushra Salama"/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

// https://reactrouter.com/start/declarative/routing#dynamic-segments