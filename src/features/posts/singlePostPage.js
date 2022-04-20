import React from 'react'
import { useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export const SinglePostPage =(props) =>{
    const {postId} = useParams();

    const post = useSelector(state=> state.posts.posts.find(post => post.id === postId))

    function convertDate(date){
        let newDate = new Date(date);
        return newDate.toLocaleDateString() +" "+newDate.getHours()+":"+newDate.getMinutes();
    }
    
    if(!post){
        return(
            <section className="post">
            <h2>post not found</h2>
            
        </section>
        )

    }


    return(
        <section className="post ">
            <h2  className='mt-5 p-2 m-2'>{post.title}</h2>
            <img src={post.imageUrls[0]} class="card-img-top rounded detail-img " alt="article"/>

            <p className="fst-italic date"><i class="fa-solid fa-clock"></i> Aangemaakt op {convertDate(post.articleDates.publicationDate)} - laatst gewijzigd {convertDate(post.articleDates.lastModifiedDate)}</p>

            <p >{post.content}</p>
           
            <p className="mb-5 d-flex justify-content-center">  <Link to={`/editPost/${post.id}`} className="button border p-2 m-5 rounded">  
            <i className="fa-regular fa-pen-to-square"/> Pas het artikel aan</Link><Link to={`/posts`} className="button border p-2 m-5 rounded">  Terug naar overzicht</Link> </p>
        </section>
    )
}