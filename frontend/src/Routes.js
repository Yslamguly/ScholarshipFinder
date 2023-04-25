import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import NavBar from "./components/NavBar";
import {Footer} from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {Category} from "./pages/Category";
import {About} from "./pages/About";

export const RouterController = () =>{
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/Bachelor'} element={<Category category={'Bachelor'}/>}/>
                <Route path={'/Master'} element={<Category category={'Master'}/>}/>
                <Route path={'/PHD'} element={<Category category={'PHD'}/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}
