import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FavoritesPageWithAuth, LoginPageWithAuth, SearchPageWithAuth } from './functions/ProtectedRoutes';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/favorites" element={<FavoritesPageWithAuth />} />
          <Route path="/login" element={<LoginPageWithAuth />} />
          <Route path="/search" element={<SearchPageWithAuth />} />
          <Route exact path="/" element={<LoginPageWithAuth />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;