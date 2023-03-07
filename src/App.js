import './App.css';
import MovieCards from './components/MovieCards';
import MovieDetails from './components/MovieDetails';
import Navbar  from './components/Navbar';
import NumberOfSeats from './components/NumberOfSeats';
import SelectSeats from './components/SelectSeats';
import Timing from './components/Timing';
function App() {
  return (
    <>
    <Navbar/>
    <MovieCards/>
    {/* <MovieCards/> */}
    {/* <MovieCards/> */}
    <MovieDetails/>
    <Timing/>
    <NumberOfSeats/>
    <SelectSeats/>

    </>
  );
}

export default App;
