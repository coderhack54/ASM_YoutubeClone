import "./App.css";
import Header from "./components/header/Header";
import RecommendedVideos from "./components/recommended/RecommendedVideos";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/searchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/search/:searchitem"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          ></Route>
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
