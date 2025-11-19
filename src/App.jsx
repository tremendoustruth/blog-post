
import './App.css'
import BlogPostList from './BlogPostList'


function App({ posts }) {

  return (
    <main>
      <h1>Blog Posts!</h1>
      <BlogPostList posts={posts} />
    </main>
  )
}

export default App
