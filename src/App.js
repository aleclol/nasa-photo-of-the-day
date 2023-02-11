import React, {useState, useEffect} from "react";
// import axios from 'axios'
import "./App.css";
import Container from './Components/Container'
import Header from './Components/Header/Header'



function App() {

  const [data, setData] = useState()

//   useEffect(()=> {
//     axios.get("https://api.nasa.gov/planetary/apod")
//         .then(res => {
//             console.log(res)
//         })
//         .catch(err => console.log(err))
// }, [])

  return (
    <div className="App">
      <Header />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Container />
    </div>
    
  );
}

export default App;
