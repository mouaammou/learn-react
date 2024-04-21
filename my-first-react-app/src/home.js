import { useEffect, useState } from 'react'
import BlogList from './blog';

const Home = () => {

    const [elements, setEelms] = useState(null);

    const [pending, setPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5500/blogs")
            .then(res => res.json())
            .then ((data) => 
            {
                setEelms(data);
                setPending(false)
            })
        }, 2000);
    }, [])

    return (
        <div className="home">
        {pending && <h1>Loading ...</h1> }
        {elements && <BlogList elements={elements} title='App blogs title'/>}
        </div>
    );
}
 
export default Home;