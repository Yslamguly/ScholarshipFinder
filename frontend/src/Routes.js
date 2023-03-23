import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";

export const RouterController = () =>{
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}
