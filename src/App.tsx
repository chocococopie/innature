import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import './App.css';

export default function App(){
  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">InNature</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/resources">Resources</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resources" element={<Resources/>} />
        </Routes>
      </main>

      <footer className="footer">
        <small>© InNature</small>
      </footer>
    </div>
  );
}
