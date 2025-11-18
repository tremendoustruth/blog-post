
import './App.css'
import BlogPostList from './BlogPostList'

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

function App() {

  return (
    <main>
      <h1>Blog Posts!</h1>
        <BlogPostList posts={posts} />
    </main>
  )
}

export default App
