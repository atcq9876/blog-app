import './App.css';

function App() {
  const testString = "Test dynamic variable"
  
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <p>{ testString }</p>
      </div>
    </div>
  );
}

export default App;
