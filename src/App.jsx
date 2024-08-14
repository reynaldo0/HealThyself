import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Team from './Pages/Team';
import Baby from './Pages/Baby';
import Option3d from './Pages/Option3D';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/home" element={<Option3d />} />
      </Routes>
    </Router>
  );
}

export default App;
