const Home = () => {
  const handleClick = (e) => {
    console.log('Hello');
    console.log(e);
  }

  const handleClickAgain = (name, e) => {
    console.log('Hello ' + name);
    console.log(e.target);
  }
  
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => {handleClickAgain('Andy', e)}}>Click me too</button>
    </div>
  );
}
 
export default Home;