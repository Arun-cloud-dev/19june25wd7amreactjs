import reactImg from "./assets/download.png";
import react2Img from "./assets/react-query.2d296c3a.png";
import './App.css';


const reactDescription = ['Fundamental ', "crucial", "essential", "important", "necessary", "vital", "indispensable", "key", "critical", "pivotal", "integral", "paramount", "significant", "crucial"];


function getRandomDescription(max) { 
    return Math.floor(Math.random() * (max + 1));
}




function Header() {

  const description = reactDescription[getRandomDescription(13)];

  
  return (
    <header className="App-header">
      <img src={react2Img} alt="" />
      <h1> React Essentials</h1>
      <p>
        {description} React Concepts You Will Need For Almost Any app You are
        Goin To Build.
      </p>
    </header>
  );
}


function App() { 
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Time to get START</h2>
        
      </main>
    </div>
  )
}

export default App