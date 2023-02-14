import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Container from './Components/Container/Container'
import Header from './Components/Header/Header'

const sampleData = {
  copyright:"Donato Lioce",
  date: "2023-02-13",
  explanation: "No, Comet ZTF is not going to hit Mars. Nicknamed the Green Comet for its bright green coma, C/2022 E3 (ZTF) did, however, pass almost in front of the much-more distant planet a few days ago, very near in time to when the featured picture was taken. The two sky icons were here captured behind a famous Earth icon -- the Matterhorn, a mountain in the Italian Alps with a picturesque peak. Both the foreground and background images were taken on the same evening by the same camera and from the same location. The comet's  white dust tail is visible to the right of the green coma, while the light blue ion tail trails towards the top of the image. Orange Mars is well in front of the numerous background stars as well as the dark nebula Barnard 22 to its lower right. Although Mars remains visible in the evening sky for the next few months, Comet ZTF has already begun to fade as it returns to the outer Solar System.    Comet ZTF Gallery: Notable Submissions to APOD",
  hdurl: "https://apod.nasa.gov/apod/image/2302/CometZtfMars_Lioce_4229.jpg",
  title: "Comet ZTF and Mars",
  url: "https://apod.nasa.gov/apod/image/2302/CometZtfMars_Lioce_960.jpg"
}

function App() {

  const [data, setData] = useState(sampleData)

//   useEffect(()=> {
//     axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
//         .then(res => {
//             setData(res.data)
//         })
//         .catch(err => console.log(err))
// }, [])


  return (
    <div className="App">
      <Header />
      <Container data={data} />
    </div>
    
  );
}

export default App;
