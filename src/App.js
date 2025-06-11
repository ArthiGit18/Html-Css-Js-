import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import Html from './Pages/Html';
import Css from './Pages/Css';
import Javascript from './Pages/Javascript';
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/html-tags" element={<Html />} />
        <Route path="/css-tags" element={<Css />} />
        <Route path="/javascript-elements-functions" element={<Javascript />} />
      </Routes>
    </Router>
  );
}

export default App;
