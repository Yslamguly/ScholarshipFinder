import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import NavBar from "./components/NavBar";
import {Footer} from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CardList from './components/Cards/CardList';

export const RouterController = () =>{
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/card'} element={<CardList/>}/>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}
