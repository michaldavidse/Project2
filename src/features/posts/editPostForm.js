import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {postUpdated } from './postsSlice';

export const EditPostForm = (props) =>{
    const {postId} = useParams();
    
    const existingPost = useSelector(state => state.posts.posts.find(post => post.id=== postId))

    const[title, setTitle]=useState(existingPost.title);
    const[content,setContent]=useState(existingPost.content);
    const[subtitle, setSubtitle] = useState(existingPost.subtitle);

    const dispatch=useDispatch();
    let navigate= useNavigate();

    const onTitleChanged = (event) => {setTitle(event.target.value)}
    const onContentChanged = (event) => {setContent(event.target.value)}
    const onSubtitleChanged = (event) => {setSubtitle(event.target.value)}

    const onSavePostClicked = () =>{
        if(title && content){
            dispatch(postUpdated({id: postId, title, content}))
            navigate(`/posts/${postId}`)
        }
    }



    return(
        <section>
        <h2 className="text-center mt-3 p-2 m-2">Edit Post</h2>
        <form>
        <label className="form-label  mt-3"  htmlFor="postTitle">Titel:</label>
        <input  className="form-control"
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
          required
        />
              <label className="form-label  mt-3"htmlFor="postSubtitle">Subtitel:</label>
                <input className="form-control"
                    type="text"
                    id="postSubtitle"
                    name="postSubtitle"
                    value={subtitle}
                    onChange={onSubtitleChanged}
                    required
                />
               
        <label className="form-label  mt-3" htmlFor="postContent">Content:</label>
        <textarea  className="form-control"
          id="postContent"
          name="postContent"
          value={content}
          rows="10"
          onChange={onContentChanged}
          required
        />
      </form>
      <button type="button" onClick={onSavePostClicked} className="border ml-0 p-2 mt-5 rounded button">
        Save Post
      </button>
      </section>
    )


}