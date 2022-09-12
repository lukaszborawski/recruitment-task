import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { nanoid } from '@reduxjs/toolkit';

import { selectPostsByUser } from '../features/posts/postsSlice'
import { selectUserById } from '../features/users/usersSlice'
import { addNewPost, deletePost } from '../features/posts/postsSlice'


const UserDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => selectUserById(state, Number(id)))
  const postsForUser = useSelector(state => selectPostsByUser(state, Number(id)))

  const handleDelete = (id) => {
    dispatch(deletePost({ id }));
  };

  const [title, setTitle] = useState('')
  const onTitleChanged = e => setTitle(e.target.value)

  const handleAdd = () => {
    dispatch(
      addNewPost({
        userId: Number(id),
        id: nanoid(),
        title,
      })
    );
    setTitle("");
  };

  return (
    <>
      <Header>
        <button onClick={() => navigate(-1)}>Back</button>
        <UserName>{user.name}</UserName>
        <button disabled>Add Post</button>
      </Header>
      <Content>
        {postsForUser.map(
          ({ id, title, userId }) => (
            <PostItem key={id}>
              <DeleteButton onClick={() => handleDelete(id)}>delete</DeleteButton>
              <PostDetailButton to={`/user/${id}/${id}`}>{title.substring(0, 50)}</PostDetailButton>
            </PostItem>

          )
        )
        }
        <form>
          <label htmlFor="titlePost">Title:</label>
          <input
            type="text"
            id="titlePost"
            name="titlePost"
            value={title}
            onChange={onTitleChanged}
          />
          <button
            type="button"
            onClick={handleAdd}

          >
            Save
          </button>
        </form>
      </Content>
    </>
  )
}

export default UserDetails

const Header = styled.header`
 display: flex;
 justify-content: space-between;
`;

const UserName = styled.h2`
 
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 50px 0;
  padding: 0 100px;
  color: black;
`;
const PostItem = styled.div`
  display: flex;
  justify-content: start;
  margin: 10px 5px;
  padding: 10px 5px;
  color: black;
  border: 1px solid ${({ theme }) => theme.black};
`;

const PostDetailButton = styled(Link)`
  color: ${({ theme }) => theme.darkgray};
`;

const DeleteButton = styled.button`
  margin-right: 10px;
`;
