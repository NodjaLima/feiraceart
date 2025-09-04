import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Admin from './pages/admin';
import Expositores from './pages/expositores';
import Blog from './pages/blog';
import Contato from './pages/contato';
import Regulamento from './pages/regulamento';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/expositores" element={<Expositores />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/regulamento" element={<Regulamento />} />
      </Routes>
    </Router>
  )
}

export default App
