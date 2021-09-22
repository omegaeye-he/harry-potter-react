import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function SearchResult(token) {
  const [data, setData] = useState({})

  const fetchData = async() => {
       try {
      const response = await axios.get('http://localhost:3001/api/v1/characters/search', {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token.token}`
        },
      });

      console.log(response)

      setData(response.data.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []) 

  return(
    <div> 
      <h2> { data.name } </h2>
      <h2> { data.species } </h2>
      <h2> { data.gender } </h2>
      <h2> { data.house } </h2>
    </div>
  )
}