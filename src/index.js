import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { makeServer } from "./server";
import Main from "./pages/Main";
// import MockApi from "./pages/MockApi";
import Explore from "./pages/Explore";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout";
import MockApi from "./pages/MockApi";
import Playlist from "./pages/playlist";
import Likes from "./pages/likes";
import WatchLater from "./pages/watchLater";
import History from "./pages/history";
import { Provider } from "react-redux";
import store from "./components/redux/store";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="mockapi" element={<MockApi />} />
          <Route index element={<Main />} />
          <Route element={<Layout />}>
            <Route path="explore" element={<Explore />} />
            <Route path="playlist" element={<Playlist />} />
            <Route path="likes" element={<Likes />} />
            <Route path="watchlater" element={<WatchLater />} />
            <Route path="history" element={<History />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
