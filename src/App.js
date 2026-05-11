import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Pages";
import Watchmen from "./Pages/watchmen";
import Header from "./Components/Header";
import Explore from "./Pages/explore";
import Watchwomen from "./Pages/watchwomen";
import Sunglassmen from "./Pages/sunglassmen";
import Sunglasswomen from "./Pages/sunglasswomen";
import SearchResults from "./Pages/SearchResults";
import Newsletter from "./Components/Newsletter";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact ={true} element={<Home/>} />
        <Route path="/watchmen" element={<Watchmen/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/watchwomen" element={<Watchwomen/>}/>
        <Route path="/sunglassmen" element={<Sunglassmen/>}/>
        <Route path="/sunglasswomen" element={<Sunglasswomen/>}/>
        <Route path="/search" element={<SearchResults/>}/>
      </Routes>
      <Newsletter />
    </BrowserRouter>
  );
}

export default App;
