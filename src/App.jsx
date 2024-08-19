import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './Pages/Team';
import Baby from './Pages/Baby';
import HomeLayout from './layout/HomeLayout';
import Aos from 'aos';
import 'aos/dist/aos.css'

Aos.init({
  // mirror: false,
  // once: true,
})

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/team" element={<Team />} />
        <Route path="/baby" element={<Baby />} />
      </Routes>
    </Router>
  );
}

export default App;
