import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/Store";
import WatchPage from "./components/WatchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import SearchedResult from "./components/SearchedResult";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<MainContainer />} />
            <Route path="watch" element={<WatchPage />} />
            <Route path="result" element={<SearchedResult/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
