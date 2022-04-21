import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import Axios from "axios";





export const fetchPosts = createAsyncThunk('/posts/fetchPosts', 
    async () => {
        const response = await Axios.get('https://www.vrt.be/vrtnws/nl/regio/_jcr_content/par/grid.app.json')
    return response.data
  })

  

  const initialState={
    posts:[
    ], 
    status:'idle',
    error: null
}

const i= 0

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title, subtitle, content, userId) {
                i=i+1;
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        subtitle,
                        content,
                        imageUrls: ["https://picsum.photos/200/300?random="+i.toString()
                            ],
                        articleDates:{
                             publicationDate: new Date().toISOString(),
                             lastModifiedDate: new Date().toISOString(),
                        },
                        

                    }
                }
               
            }
        },

        postUpdated(state, action) {
            //dat wat je meekrijgt:
            const { id, title, subtitle, content } = action.payload
            //haal post uit de lijst:
            const existingPost = state.posts.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title;
                existingPost.subtitle = subtitle;
                existingPost.content = content;
                existingPost.articleDates.lastModifiedDate = new Date().toISOString();
            }
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.posts = state.posts.concat(action.payload)
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }

})

export const {postAdded, postUpdated} = postsSlice.actions



export default postsSlice.reducer