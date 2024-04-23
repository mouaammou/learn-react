import { useState } from "react";

const CreateNewBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [send, setSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {title, body, author}

        setSending(true);
        setTimeout(() => {
            
            fetch('http://localhost:5500/blogs', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(formData)
            })
            .then(() => {
                    setSending(false);
                }
            )
        }, 500);
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
                {!send && <button>Add Blog</button>}
                {send && <button>Adding ... </button>}
            </form>
        </div>
    );
}
 
export default CreateNewBlog;