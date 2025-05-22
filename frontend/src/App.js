import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  // In a real app, you would get userId from authentication
  const userId = 'user123'; // Temporary hardcoded user ID

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <header>
            <h1>MERN E-Commerce</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <ProductList userId={userId} />
                  <ShoppingCart userId={userId} />
                </>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;