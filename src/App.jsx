import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './Pages/Team';
import Baby from './Pages/Baby';
import HomeLayout from './layout/HomeLayout';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Child from './Pages/Child';
import Teen from './Pages/Teen';
import Adult from './Pages/Adult';
import Elderly from './Pages/Elderly';

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
        <Route path="/child" element={<Child />} />
        <Route path="/teen" element={<Teen />} />
        <Route path="/adult" element={<Adult />} />
        <Route path="/elderly" element={<Elderly />} />
      </Routes>
    </Router>
  );
}

export default App;
