import Navbar from "./navbar";
import Home from "./home";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateNewBlog from "./newBlog";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
    return (
        <Router>
            <div className="App">
            <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/create" element={<CreateNewBlog />} />
                        <Route exact path="/blogs/:id" element={<BlogDetails />} />
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                </div> 
            </div>

        </Router>
    );
}

export default App;