import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const initialState = [];

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  const response = await axios.get(COMMENTS_URL);
  return response.data
})


const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export const selectAllComments = (state) => state.comments;

export const selectCommentsByPost = createSelector(
  [selectAllComments, (state, postId) => postId],
  (comments, postId) => comments.filter(comment => comment.postId === postId)
)

export const selectUserById = (state, userId) =>
  state.users.find(user => user.id === userId)

export default commentsSlice.reducer