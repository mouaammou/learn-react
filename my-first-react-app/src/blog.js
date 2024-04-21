const BlogList = ({data, title})=>
{

    return (
        <div className="blog-list">
            <h1 className="title"> { title } </h1>
            {
                data.map((ele) => 
                    (<div className="blog-preview" key={ele.id}>
                        <h2>{ele.title}</h2>
                        <p>written by {ele.author} </p>
                    </div>)
                )
            }
        </div>
    );
}

export default BlogList;