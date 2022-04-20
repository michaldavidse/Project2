import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import {useNavigate} from 'react-router-dom'
  
export const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleTitleChange = (event) => setTitle(event.target.value)
    const handleContentChange = (event) => setContent(event.target.value)
    const handleSubtitleChange = (event) => setSubtitle(event.target.value)

    let navigate = useNavigate();
    const onSavePostClicked = () => {
        if (title && content) {
            console.log(title, subtitle, content)
            dispatch(postAdded(title, subtitle, content))
            setTitle('');
            setSubtitle('')
            setContent('');
            navigate('/');
        }
    

    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(subtitle)


    return (
        <div>
            <h2 className="text-center p-2 m-2">Nieuw artikel</h2>
            <form>
                <label className="form-label mt-3"htmlFor="postTitle">Titel:</label>
                <input className="form-control"
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={handleTitleChange}
                    required
                />
                  <label className="form-label mt-3"htmlFor="postSubtitle">Subtitel:</label>
                <input className="form-control"
                    type="text"
                    id="postSubtitle"
                    name="postSubtitle"
                    value={subtitle}
                    onChange={handleSubtitleChange}
                    required
                />
               
                <label className="form-label mt-3" htmlFor="postContent">Content:</label>
                <textarea className="form-control"
                    id="postContent"
                    name="postContent"
                    value={content}
                    rows="10"
                    onChange={handleContentChange}
                    required
                />
                <button type="submit" onClick={onSavePostClicked} disabled={!canSave} className="border ml-0 p-2 mt-5 rounded button">Save Post</button>
            </form>




        </div>
    )
}