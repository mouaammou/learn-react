import { useEffect, useState } from 'react'
import BlogList from './blog';
import useFetch from './useFetch';

const Home = () => {

    // const [data, setEelms] = useState(null);
    // const [pending, setPending] = useState(true);
    // const [error, setError] = useState(null);


    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:5500/blogs")
    //             .then(res => 
    //                 {
    //                     if ( ! res.ok )
    //                         throw Error("could not fetch the resource");
    //                     return res.json();
    //                 })
    //             .then ((data) => 
    //                 {
    //                     setEelms(data);
    //                     setPending(false)
    //                     setError(null);
    //                 })
    //             .catch(err => 
    //                 {
    //                     setError(err.message)
    //                     setPending(false)
    //                 })
    //     }, 2000);
    // }, [])


    const {data, pending, error} = useFetch("http://localhost:5500/blogs");
    return (
        <div className="home">
        {error && <h3>could not fetch the data from the the specific resource</h3> }    
        {pending && <h1>Loading ...</h1> }
        {data && <BlogList data={data} title='App blogs title'/>}
        </div>
    );
}
 
export default Home;