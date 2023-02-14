import React, {useState, useEffect} from "react";
import axios from 'axios'
import dummyData from "./dummyData";
import "./App.css";
import Header from './Components/Header/Header'
import Posts from './Components/Posts/Posts'

function App() {

  const [data, setData] = useState(dummyData)

//   useEffect(()=> {
//     axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2023-02-08&end_date=2023-02-14")
//         .then(res => {
//           console.log(res)  
//           // setData(res.data)
//         })
//         .catch(err => console.log(err))
// }, [])

  return (
    <div className="App">
      <Header />
      <Posts data={data} />
    </div>
    
  );
}

export default App;
