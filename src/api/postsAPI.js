function postsAPI(){
    var fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
        const response = await fetch('https://www.vrt.be/vrtnws/nl/regio/_jcr_content/par/grid.app.json')
        return response.data
    })

}





