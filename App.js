import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header/Header';
import Home from './Component/HomeData/Home';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Boski from './Component/Boski';
import Washweasr from './Component/Washweasr';
import Kurta from './Component/Kurta';
import MenShawl from './Component/MenShawl';
import Cotton from './Component/Cotton';
import Karandi from './Component/Karandi';
import Singleproduct from './Component/Singleproduct';
import ErrorPage from './Component/ErrorPage';
import ViewCard from './Component/ViewCard';
import BillingData from './Component/BillingData';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
  <Header/>
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/boski' element={<Boski/>} />
    <Route exact path='/wash&wear' element={<Washweasr/>} />
    <Route exact path='/kurta' element={<Kurta/>} />
    <Route exact path='/menshawl' element={<MenShawl/>} />
    <Route exact path='/cotton' element={<Cotton/>} />
    <Route exact path='/karandi' element={<Karandi/>} />
    <Route exact path='/viewcard' element={<ViewCard/>} />
    <Route exact path='/billing' element={<BillingData/>} />
    <Route exact path='/dashboard' element={<Dashboard/>} />
    <Route exact path="/singleproduct/:id" element={<Singleproduct />} />
    <Route path='*' element={<ErrorPage/>}/>
  </Routes>
 <Footer/>
 </BrowserRouter>
    </>
  );
}

export default App;
