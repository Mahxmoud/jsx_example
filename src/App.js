import React from 'react'
import './App.css';
import './style.css';
import myImg from './imageInSrc.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ border: "solid 1px black",maxWidth:"100vw" }}>
          <h1 className="title red">Mahmoud Joma</h1>
        <br/>
          <img src={myImg} alt="me, with cool background" />
        <br/>
        <img src="/imageInPublic.jpg" alt="me, Rick and Morty having fun"/>
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
      </header>
    </div >
  );
}

export default App;
