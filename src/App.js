import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PersonalizedNewsFeed from './components/PersonalizedNewsFeed';
import NewsFeed from './components/NewsFeed';
import './App.css';
import axios from 'axios';

export const NewsContext = React.createContext();

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);
  
  let url = 'https://newsapi.org/v2/everything?q=apple&from=2023-06-20&to=2023-06-20&sortBy=popularity&apiKey=b9a52b3676e643e8b97361fa1b2a8919'

  const getNews = () => {
    axios.get(url).then(response => {
      setNews(response.data.articles);
    });
  };

  const PrivateRouteWrapper = ({ element: Element, fallbackPath, ...rest }) => {
    const isLoggedIn1 = localStorage.getItem('isLogin');
    return isLoggedIn1 ? (
      <Element />
    ) : (
      <Navigate to={fallbackPath} replace state={{ from: fallbackPath }} />
    );
  };

  return (
    <div className="App">
      <NewsContext.Provider value={{ news }}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRouteWrapper
                  element={NewsFeed}
                  fallbackPath="/login"
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/personalizes-feed"
              element={
                <PrivateRouteWrapper
                  element={PersonalizedNewsFeed}
                  fallbackPath="/login"
                />
              }
            />
            <Route
              path="/"
              element={
                <PrivateRouteWrapper
                  element={NewsFeed}
                  fallbackPath="/login"
                />
              }
            />
          </Routes>
        </Router>
      </NewsContext.Provider>
    </div>
  );
};

export default App;
