import Navbar from "./navbar";
import Home from "./home";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateNewBlog from "./newBlog";

function App() {
    return (
        <Router>
            <div className="App">
            <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/create" element={<CreateNewBlog />} />
                    </Routes>
                </div> 
            </div>

        </Router>
    );
}

export default App;