import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import Html from './Pages/Html';
import Css from './Pages/Css';



function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/html-tags" element={<Html />} />
      <Route path="/css-tags" element={<Css />} />
    </Routes>
   </Router>
  );
}

export default App;
