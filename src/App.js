import React, {useState, useEffect} from 'react';

const axios = require('axios');


function App() {
  const [count, setCount] = useState(0);
  const [commit, setCommit] = useState([])


  useEffect(() => {
    document.title = `You clicked ${count} times`;
    axios({
      method: 'get',
      url: 'https://api.github.com/repos/nodejs/node/commits',
      responseType: 'arraybuffer'
    })
      .then(function (response) {
        let rawCommit = response.data
        rawCommit = rawCommit.slice(0,25);
        
        rawCommit.map((each) =>{
          console.log(each.commit)

        })
        // console.log(rawCommit[0].commit)
        })
      .catch((err) =>{
        console.log(err)
      });
  });
  
  


  return (
    <div>
    
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
