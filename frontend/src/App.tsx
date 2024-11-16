
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import AddPage from './components/AddPage';
import RetrievePage from './components/RetrievePage';
import TopNav from './components/TopNav';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/add" element={<AddPage />} />
        <Route path="/retrieve" element={<RetrievePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
