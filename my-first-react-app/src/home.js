import BlogList from './blog';
import useFetch from './useFetch';

const Home = () => {
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