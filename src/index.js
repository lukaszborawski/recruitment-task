import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { store } from './store/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';
import { fetchPosts } from './features/posts/postsSlice'
import { fetchComments } from './features/comments/commentsSlice'

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());
store.dispatch(fetchComments());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


