

import { useState, useEffect } from 'react'
import './App.css'
import List from './Component/List'

function App() {
  const[data, setData] = useState
  ([]);
  useEffect(() => {
    async function fetchData(){
      const result = await fetch(
        'https://rickandmortyapi.com/api/character'
      );
      const {results} = await result.json()
      setData(results);
    }
    fetchData();

  }, [])
  console.table(data);
  
  return (
    <>
      <h1 className='app-title'>Rick and Morty</h1>
      <List data={data}/>

    </>
  )
}

export default App
