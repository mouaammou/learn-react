import { useState } from "react";

const CreateNewBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {title, body, author}
        
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <input 
                    type="text" 
                    required
                    value={ author }
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default CreateNewBlog;