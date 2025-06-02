import './App.css';
import { Auth } from "./components/auth";
import {} from './config/firebase';
import {db} from './config/firebase';
import {getDocs, collection} from 'firebase/firestore';


function App() {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, 'movies');

  useEffect(() => {
    const getMovieList = async () => {
      // Read the data
      //set the movie list
      const dsata = await getDocs(moviesCollectionRef);
    }
  }, [])
  
  return (<div className="App">
    <Auth />
  </div>
  );
}

export default App;
