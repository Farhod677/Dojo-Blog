import React, { useState } from 'react';
import { useHistory } from 'react-router';

const CreateBlog = ({ update }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();

    const handleAdd = e => {
        e.preventDefault();

        const blog = {title, body, author};
    
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(blog)
        };
    
        fetch('http://localhost:3000/blogs', requestOptions)
            .then(res => {
                if (res.ok) {
                    update();
                    history.push('/');
                }
            });

        setTitle('');
        setBody('');
        setAuthor('');
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label htmlFor="title">Blog title:</label>
                <input 
                    id='title'
                    type="text" 
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label htmlFor='content'>Blog body:</label>
                <textarea 
                    id="content"
                    value={body} 
                    cols="30" 
                    rows="10" 
                    onChange={e => setBody(e.target.value)} 
                    required>
                </textarea>
                <label htmlFor="author">Blog Author:</label>
                <select onChange={e => setAuthor(e.target.value)} value={author} id="author">
                    <option value="User">Anonymous User</option>
                    <option value="Farhod">Farhod</option>
                    <option value="Adham">Adham</option>
                    <option value="Bunyod">Bunyod</option>
                    <option value="Davron">Davron</option>
                    <option value="Zafar">Zafar</option>
                </select>
                <button onClick={e => handleAdd(e)}>Add Blog</button>
            </form>
        </div>
    );
}
 
export default CreateBlog;