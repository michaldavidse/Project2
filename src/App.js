
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'



import { Navbar } from './app/components/navbar'
import { PostsList } from './features/posts/postsList'
import AboutMe from './app/aboutMe'
import { AddPostForm } from './features/posts/addPostForm'
import { SinglePostPage } from './features/posts/singlePostPage'
import { EditPostForm } from './features/posts/editPostForm'
import "./App.css"




function App() {
  return (
   <div>
  
    <Router>
    <Navbar />

      <div className="container">
        <Routes>
          <Route
            end
            path="/"
            element={
                <PostsList />}
          />
           <Route path='/aboutme' end element = {<AboutMe/>}/>
           <Route path='/posts' end element = {<PostsList/>}/>           
           <Route path='/create' element = {<AddPostForm/>}/>
           <Route end path="/posts/:postId" element = {<SinglePostPage />} />
           <Route end path="/editPost/:postId" element = {<EditPostForm />} />






        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
