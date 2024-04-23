import { Link } from 'react-router-dom'

const BlogList = ({data, title})=>
{
    return (
        <div className="blog-list">
            <h1 className="title"> { title } </h1>
            {
                data.map((ele) =>
                {
                    return (
                        <div className="blog-preview" key={ele.id}>
                            <Link to={`blogs/${ele.id}`}>
                                    <h2>{ele.title}</h2>
                                    <p>written by {ele.author} </p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default BlogList;