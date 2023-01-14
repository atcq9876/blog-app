import BlogList from './BlogList';
import useFetch from './useFetch.js';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  
  return (
    <div className="home">
      {isPending && <div className="loading">Loading blogs...</div>}
      {error && <div className="error">{ error }</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;