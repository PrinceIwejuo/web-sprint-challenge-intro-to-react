import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
// import styled from 'styled-components'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        console.log('get', res.data.results);
        setData(res.data.results);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="name">
        {data.map((person) => {
          return (
            <Character
              key={person.name}
              name={person.name}
              year={person.birth_year}
              films={person.films.length}
              ships={person.starships} />
          )
        })}
      </div>
    </div>
  );
}

export default App;