import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Listing from './pages/Listing';


const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listing" element={<Listing />} />
          {/* <Route path="/about" element={<About />} /> */}
       </Routes>
    </>
  );
}

export default App;
