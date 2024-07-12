import React from 'react';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import DateTime from './components/DateTime';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <DateTime />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:productId" element={<ProductDetails />} />
                </Routes>
                <MapSection />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
