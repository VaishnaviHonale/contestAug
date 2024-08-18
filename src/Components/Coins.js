
import React, { useState, useEffect } from 'react';
import './Coins.css';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedCoins, setSortedCoins] = useState([]);

 useEffect(() => {
  const fetchCoins = async () => {
    try {
      const response = await fetch('(481106E2-DD4B-4B91-9C01-FA44E9F2A7E1)');
      if (response.headers.get('Content-Type') === 'application/json') {
        const data = await response.json();
        setCoins(data);
      } else {
        console.error('Response is not JSON');
      }
    } catch (error) {
      console.error('Error fetching coins:', error);
    }
  };
  fetchCoins();
}, []);



  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSortedCoins(filteredCoins);
  };

  const handleSort = () => {
    const sortedCoins = coins.sort((a, b) => b.market_cap - a.market_cap);
    setSortedCoins(sortedCoins);
  };

  return (
    <div>
      <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Search" />
      <button onClick={handleSort}>Sort by Market Cap</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {searchTerm ? sortedCoins.map(coin => (
            <tr key={`( 481106E2-DD4B-4B91-9C01-FA44E9F2A7E1)`}>
              <td>{coin.name}</td>
              <td><img src={coin.image} alt={coin.name} /></td>
              <td>{coin.symbol}</td>
              <td>{coin.current_price}</td>
              <td>{coin.total_volume}</td>
            </tr>
          )) : coins.map(coin => (
            <tr key={`( 481106E2-DD4B-4B91-9C01-FA44E9F2A7E1)`}>
              <td>{coin.name}</td>
              <td><img src={coin.image} alt={coin.name} /></td>
              <td>{coin.symbol}</td>
              <td>{coin.current_price}</td>
              <td>{coin.total_volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;

