import React from "react";
import Header from "../header";
import NewsListPage from "../pages/news-list-page";
import OpenNewsPage from "../pages/open-news-page";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router";
import Footer from "../footer"

const App = () => {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/hacker-news-interface-app/" element={<NewsListPage />} />
        <Route path="/*" element={<NewsListPage />} /> 
        <Route path="/open-news/" element={<OpenNewsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
