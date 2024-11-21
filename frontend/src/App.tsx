
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import AddPage from './components/AddPage';
import RetrievePage from './components/RetrievePage';
import TopNav from './components/TopNav';
import Manager from './components/Manager';
import Hero from './components/Hero';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <BrowserRouter>
      <Manager/>
      <TopNav />
      <Routes>
        <Route path="/add" element={<AddPage />} />
        <Route path="/retrieve" element={<RetrievePage />} />
        <Route path="/signup" element= {<Signup/>}/>
        <Route path="/signin" element= {<Signin/>}/>
      </Routes>
      <Hero/>
    </BrowserRouter>
  );
}

export default App;
