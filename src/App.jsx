
import './App.css'
import BlogPostList from './BlogPostList'


const posts = [
    {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    formattedDate: 'January 1, 2023',
    url: '/post',
    },
    {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    formattedDate: 'February 15, 2023',
    url: '/post',
    },
    {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    formattedDate: 'March 10, 2023',
    url: '/post',
    },
]

function App() {

  return (
    <main>
      <h1>Hello, World!</h1>
        <BlogPostList posts={posts} />
    </main>
  )
}

export default App
