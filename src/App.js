import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [flyFrom, setFlyFrom] = useState("");
  const [flyTo, setFlyTo] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");


  async function fetchData() {
    const response = await fetch (`https://api.skypicker.com/flights`);
    const results = await response.json();
    console.log(results);
  }

  useEffect(() => {
    fetchData();
  }, []);




  return (
    <div className="App">
      <div>HELLO</div>
      
    </div>
  );
}

export default App;
