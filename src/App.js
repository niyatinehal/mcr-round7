import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './Home';
import {CountriesPage} from './CountriesPage';
import {DestinationsPage} from "./DestinationsPage"
import {SinglePage} from "./SinglePage"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/countries" element={<CountriesPage/>}/>
      <Route path="/destinations" element={<DestinationsPage/>}/>
      <Route path={`/destinations/:id`} element={<SinglePage />} />
    </Routes>
    </div>
  );
}

export default App;
