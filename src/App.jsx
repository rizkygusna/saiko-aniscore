import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

import { FaStar } from 'react-icons/fa';
import Card from './components/Card';

function App() {
  const [season, setSeason] = useState('spring');
  const [year, setYear] = useState(0);
  const [animes, setAnimes] = useState([]);

  const initiateYear = () => {
    let newYear = new Date().getFullYear();
    setYear(newYear);
  };

  const getSeasonNow = async () => {
    try {
      const res = await fetch('https://api.jikan.moe/v4/seasons/2022/spring');
      const jsonRes = await res.json();
      const filteredData = jsonRes.data.filter((anime) => anime.score > 7.5);
      setAnimes(filteredData);
      setSeason(jsonRes.data[0].season);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    initiateYear();
    getSeasonNow();
    console.log('rendered');
  }, []);

  return (
    <div className='App'>
      <header className='Header'>
        <h1>Saiko Aniscore</h1>
        <p>Find the best rated anime of the season.</p>
      </header>
      <main>
        <section>
          <h2>{`${season} Season ${year}`}</h2>
        </section>
        <div className='CardContainer'>
          {animes.map((anime) => (
            <Card details={anime}></Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
