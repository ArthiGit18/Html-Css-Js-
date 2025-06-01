import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import Html from './Pages/Html';



function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/html-tags" element={<Html />} />
    </Routes>
   </Router>
  );
}

export default App;
