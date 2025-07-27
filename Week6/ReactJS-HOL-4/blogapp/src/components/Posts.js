import React from 'react';
import Post from '../models/Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  loadPosts() {
    // Fetch posts from API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then(data => {
      
        const posts = data.map(post => new Post(
          post.id,
          post.title,
          post.body
        ));
        
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error.message
        });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {

    console.error("Component Error:", error, info);
    this.setState({
      error: "An unexpected error occurred in the component",
      loading: false
    });
  }

  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return <div>Loading posts...</div>;
    }

    if (error) {
      return <div className="error">Error: {error}</div>;
    }

    return (
      <div className="posts-container">
        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;