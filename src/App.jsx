import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Marketplace from './components/Marketplace';
const App=()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Router>
    );
}
export default App;