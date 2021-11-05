import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const affilId = 'data4youcbp202106';
  const [flyFrom, setFlyFrom] = useState("PRG");
  const [flyTo, setFlyTo] = useState("VLC");
  const [dateFrom, setDateFrom] = useState("06/11/2021");
  const [dateTo, setDateTo] = useState("6/11/2021");


  async function fetchData() {

    const response = await fetch (`https://api.skypicker.com/flights?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=${dateFrom}&dateTo=${dateTo}&partner=${affilId}`);
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
