import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home';

function AppRoutes() {
    return (
        <main className="pagesWrapper">
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </main>
    )
}

export default AppRoutes;