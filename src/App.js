import './App.css';
import { Auth } from "./components/auth";
import { } from './config/firebase';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';


function App() {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, 'movies');

  useEffect(() => {
    const getMovieList = async () => {

      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setMovieList(filteredData);

      } catch (err) {
        console.error(err);
      }
    };

    getMovieList();
  }, []);

  return (<div className="App">
    <Auth />
<div>
  <input placeholder="Movie title..."/>
  <input placeholder="Release Date..." type="number"/>
</div>

    <div>
      {movieList.map((movie) => (
        <div>
          <h1 style={{color: movie.receivedAnOscar ? "green" : "red"}}>{movie.title}</h1>
          <p>Date: {movie.releaseDate}</p>
          
        </div>
      ))}
          </div>
  </div>
  );
}

export default App;
