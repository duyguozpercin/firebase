import './App.css';
import { Auth } from "./components/auth";
import {} from './config/firebase';
import {db} from './config/firebase';
import {getDocs} from 'firebase/firestore';


function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      // Read the data
      //set the movie list
    }
  }, [])
  
  return (<div className="App">
    <Auth />
  </div>
  );
}

export default App;
