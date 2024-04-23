import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogData = ({title, author, body}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h3>written by: {author}</h3>
            <p>
                {body}
            </p>
        </div>
    );
}

const BlogDetails = () => {
    
    const {id} = useParams();
    const navigate = useNavigate();

    const {data, pending, error} = useFetch(`http://localhost:5500/blogs/${id}`)

    const deletePost = () => {
        fetch(`http://localhost:5500/blogs/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            navigate('/')
        })
    }
    return (
        <div>
            {error && <h3>could not fetch the data from the the specific resource</h3>}
            {pending && <h1>Loading ...</h1>}
            {data && <BlogData title={data.title} author={data.author} body={data.body}/>}
            <button onClick={deletePost}>Delete Post</button>
        </div>
    );
}
 
export default BlogDetails;