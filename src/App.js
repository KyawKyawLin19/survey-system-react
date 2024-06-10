import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8000/api/posts')
          .then(response => {
              setPosts(response.data);
          })
          .catch(error => {
              console.error('There was an error fetching the posts!', error);
          });
  }, []);

  return (
      <div className="App">
          <h1>Posts</h1>
          <ul>
              {posts.map(post => (
                  <li key={post.id}>{post.title}</li>
              ))}
          </ul>
      </div>
  );
}

export default App;
