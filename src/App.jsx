import { useEffect } from "react";
import fetchDataFromApi from "./utils/api";
import { getAPIConfiguration } from "./store/homeSlice/homeSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ErrorPage from "./pages/404/errorPage";
import Details from "./pages/details/details";
import HeroBanner from "./pages/home/heroBanner/heroBanner";
import Home from "./pages/home/home";
import SearchResults from "./pages/searchResults/searchResults";
import Explore from "./pages/explore/explore";
//import ErrorPage from "./pages/404/errorPage";

function App() {
  const dispatch = useDispatch();
  const state_url = useSelector((state) => state.home.url);

  //console.log(state_url);

  useEffect(() => {
    getAPIConfig();
  }, []);

  const getAPIConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      //console.log(res);
      dispatch(getAPIConfiguration(res));
    });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
