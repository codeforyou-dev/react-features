import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Marketplace from './components/Marketplace';
import Header from './layout/Header';
const App=()=>{
    return (
        <Router>
            <Header/>
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