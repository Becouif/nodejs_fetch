import React, {useState, useEffect} from 'react';

import './app.css'

function App() {
 
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
    <h1 className="l1">List of Recent Commit Messages On NodeJS repository</h1>
   { commit.map((eachCommit) => {
      return (
        <ul>
          <li className="l1">{eachCommit.commit.message} </li>
        </ul>

        
      )
    })}
      
    </div>
  );
}

export default App;
