import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pages/Home';
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                {/* Adicione outras rotas conforme necessário */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </Router>
    );
}

export default App;