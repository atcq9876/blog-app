import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(response => {
        if (!response.ok) {
          throw Error("Failed to fetch data");
        }
        response.json();
        })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null)
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);
  
  return (
    <div className="home">
      {isPending && <div className="loading">Loading blogs...</div>}
      {isError && <div className="error">{ error }</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;