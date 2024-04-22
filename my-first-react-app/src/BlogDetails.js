import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogData = ({title, author, body}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p>
                {body}
            </p>
        </div>
    );
}

const BlogDetails = () => {
    const {id} = useParams()

    const {data, pending, error} = useFetch(`http://localhost:5500/blogs/${id}`)
    return (
            <div>
                {pending && <h1>Loading ...</h1>},
                {error && <h3>could not fetch the data from the the specific resource</h3>}
            </div>,
            data && <BlogData title={data.title} author={data.author} body={data.body}/>
    );
}
 
export default BlogDetails;