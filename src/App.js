import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.sampleapis.com/beers/ale')
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Beer Catalog</h1>
        <input
          type="text"
          placeholder="Search beers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <div key={beer.id} className="beer-card">
            <img src={beer.image} alt={beer.name} className="beer-image" />
            <h2>{beer.name}</h2>
            <p>{beer.price ? `$${beer.price}` : 'Price not available'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
