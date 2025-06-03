import './App.css';
import { Auth } from "./components/auth";
import { } from './config/firebase';
import { db } from './config/firebase';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';


function App() {
  const [movieList, setMovieList] = useState([]);

  //New movie State
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(true)


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

const onSubmitMovie = async () => {
    try {
        await addDoc(moviesCollectionRef, { title: newMovieTitle, releaseDate: newReleaseDate, receivedAnOscar: isNewMovieOscar });
    } catch (err) {
        console.error(err);
    }
};

  return (<div className="App">
    <Auth />
<div>
  <input placeholder="Movie title..." onChange={(e) => setNewMovieTitle(e.target.value)}/>
  <input placeholder="Release Date..." type="number" onChange={(e) => setNewReleaseDate(Number(e.target.value))}/>
  <input 
  type="checkbox"
  checked={isNewMovieOscar}
  onChange={(e) => setIsNewMovieOscar(e.target.checked)}/>
  <label>Received an Oscar?</label>
  <button onClick={onSubmitMovie} >Submit Movie</button>
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
