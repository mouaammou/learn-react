import Navbar from "./navbar";
import Home from "./home";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateNews from "./news";

function App() {
    return (
        <Router>
            <div className="App">
            <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/news" element={<CreateNews />} />
                    </Routes>
                </div> 
            </div>

        </Router>
    );
}

export default App;