import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogPostDetail from "./BlogPostDetail.jsx"

const posts = [
    {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    formattedDate: 'January 1, 2023',
    author: "Bushra Salama",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aperiam quia sit qui neque totam sunt? Dolor est hic ipsum recusandae officia cumque nostrum fuga expedita? Nobis magnam at dicta?",
    url: '/post1',
    },
    {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    author: "Bushra Salama",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aperiam quia sit qui neque totam sunt? Dolor est hic ipsum recusandae officia cumque nostrum fuga expedita? Nobis magnam at dicta?",
    formattedDate: 'February 15, 2023',
    url: '/post2',
    },

    {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    author: "Bushra Salama",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aperiam quia sit qui neque totam sunt? Dolor est hic ipsum recusandae officia cumque nostrum fuga expedita? Nobis magnam at dicta?",
    formattedDate: 'March 10, 2023',
    url: '/post3',
    },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/post1" element={<BlogPostDetail {...posts[0]} />}/>
        <Route path="/post2" element={<BlogPostDetail {...posts[1]} />}/>
        <Route path="/post3" element={<BlogPostDetail {...posts[2]} />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

// https://reactrouter.com/start/declarative/routing#dynamic-segments