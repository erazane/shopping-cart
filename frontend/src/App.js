import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/products/ProductList';
import ProductCard from './components/products/ProductCard';
// import ShoppingCart from './components/./cart/ShoppingCart';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';


function App() {
  const userId = 'user123';

  return (
    <Provider store={store}>
      <Router>
        <Header /> {/* ⬅️ moved here */}
        <div className="app">
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <ProductList userId={userId} />
                  {/* <ShoppingCart userId={userId} /> */}
                </>
              } />
            </Routes>
          </main>
        </div>
        <Footer /> {/* Optional: You can keep this outside or inside 'app' too */}
      </Router>
    </Provider>
  );
}

export default App;