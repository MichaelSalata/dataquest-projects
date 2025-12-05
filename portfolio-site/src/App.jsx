import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectView from './pages/ProjectView';

function App() {
  // Use basename for GitHub Pages, but allow for local development
  const basename = import.meta.env.BASE_URL;
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectView />} />
      </Routes>
    </Router>
  );
}

export default App;
