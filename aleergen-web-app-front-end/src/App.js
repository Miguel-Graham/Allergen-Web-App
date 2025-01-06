import './index.css';
import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./pages/Home/home.js";
import Edit from "./pages/Edit/edit.js";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {


    return (
    <Router>
       <NavBar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/edit' element={<Edit/>}/>
            </Routes>
    </Router>
    );
}

export default App;
