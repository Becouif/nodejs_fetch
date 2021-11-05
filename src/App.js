import React, {useState, useEffect} from 'react';



function App() {
  const [count, setCount] = useState(0);
  const [commit, setCommit] = useState([])

  const commitUsers = async () => {
    const response = await fetch('https://api.github.com/repos/nodejs/node/commits');
    const finalData = await response.json();
    finalData.slice(0,25);
    setCommit(finalData)
  }
  

  useEffect(() => {
    commitUsers();
  }, [])


  return (
    <div>
   { commit.map((eachCommit) => {
      return (
        <p>{eachCommit.commit.message}</p>
      )
    })}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
