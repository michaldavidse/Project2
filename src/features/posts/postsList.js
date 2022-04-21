import {React, useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from '../../app/components/pagination'
import { fetchPosts } from './postsSlice'

const Article = ({ post }) => {
    return (
      <Link to={`/posts/${post.id}`}  className="article d-flex justify-content-center">
 <div className="card m-3" key={post.id}>
   <div className= "card-img"> 
   <img src={post.imageUrls[0]} class="card-img-top rounded" alt="article"/>

   </div>
    
    <div className="card-body">
    <h5 className="card-title"> 
    {post.title}</h5>
    <h6 className="card-subtitle mb-2 fst-italic fw-normal">{post.subtitle}</h6>
      <p className="card-text">{post.content.substring(0, 100)}... </p>
      <p> Lees verder</p>
    </div>
  </div>
  </Link>
    )
  }


export const PostsList = () => {
  const posts = useSelector(state => state.posts.posts)
  const dispatch = useDispatch();
  const postStatus = useSelector(state => state.posts.status)
  let content

  //pagineren
  const [pageNumber, setpageNumber] = useState(1);
  const postsPerPage=5

  const indexOfLastPost = pageNumber * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = number => setpageNumber(number);


  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
      
    }
  }, [postStatus, dispatch])

  

  if (postStatus === 'loading') {
    content = "De artikelen worden geladen"
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts.slice().sort((a,b) => b.articleDates.lastModifiedDate.localeCompare(a.articleDates.lastModifiedDate));
    content = orderedPosts.slice(indexOfFirstPost, indexOfLastPost).map(post => (
      <Article key={post.id} post={post} />
    ))

  } else if (postStatus === 'failed') {
    content = <div>failed to load</div>
  }







 

  return (
    <section className="posts-list p-2 m-2">
      <h2 className='text-center'>Nieuwsoverzicht</h2>
      {content}
      <Pagination  postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}/>
    </section>
  )
}