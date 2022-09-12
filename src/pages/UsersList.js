import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { selectAllUsers } from '../features/users/usersSlice'
import UserCard from '../components/UserCard'

const UsersList = () => {

  const users = useSelector(selectAllUsers);

  return (
    <Wrapper>
      {users.map(
        ({ id, name, username, email, phone }) => (
          <UserCard
            key={id}
            id={id}
            name={name}
            username={username}
            email={email}
            phone={phone}
          />
        )
      )
      }
    </Wrapper>

  )
}

export default UsersList

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  gap: 20px;
  ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
`;