

import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'; 

import ListaProd from './components/ListaProd';
import DetalheProd from './components/DetalheProd';

function App() {
    return (
        <Router>
            <div style={{ padding: '20px' }}>
                <Routes>
                    
                    <Route path="/" element={<ListaProd />} />
                    <Route path="/produto/:id" element={<DetalheProd />} />
                    <Route path="*" element={<h1>Página Não Encontrada (404)</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;