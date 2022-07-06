import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

import { FaStar } from 'react-icons/fa';

function App() {
  const [season, setSeason] = useState('Summer');
  const [year, setYear] = useState(0);
  const [animes, setAnimes] = useState([]);

  const initiateYear = () => {
    let newYear = new Date().getFullYear();
    setYear(newYear);
  };

  const getSeasonNow = async () => {
    try {
      const res = await fetch('https://api.jikan.moe/v4/seasons/now');
      const jsonRes = await res.json();
      const filteredData = jsonRes.data.filter((anime) => anime.score > 7);
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
        <p>Find the best rated anime score of the season.</p>
      </header>
      <main>
        <section>
          <h2>{`${season} Season ${year}`}</h2>
        </section>
        <div className='CardContainer'>
          {animes.map((anime) => (
            <div className='Card'>
              <a target={'_blank'} href={anime.url}>
                {anime.title} <span>{`[${anime.score}]`}</span>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;