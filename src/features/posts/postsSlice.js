import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = [];


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL);
  return response.data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost(state, action) {
      state.push(action.payload);
    },
    deletePost(state, action) {
      const { id } = action.payload;
      const posts = state.filter(post => post.id !== id);
      state = posts;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return action.payload;
      })
  }
})

export const selectAllPosts = (state) => state.posts;

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter(post => post.userId === userId)
);

export const selectPostById = (state, id) =>
  state.posts.find(post => post.id === id);

export const { addNewPost, deletePost  } = postsSlice.actions;

export default postsSlice.reducer

