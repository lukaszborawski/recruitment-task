import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserCard = ({ id, name, username, email, phone }) => {
  return (
    <Link to={`/user/${id}`}>
      <Wrapper>
        <Detail>
          Name:
          <Value>{name}</Value>
        </Detail>
        <Detail>
          Username:
          <Value>{username}</Value>
        </Detail>
        <Detail>
          E-mail:
          <Value>{email}</Value>
        </Detail>
        <Detail>
          Phone:
          <Value>{phone}</Value>
        </Detail>
      </Wrapper>
    </Link >
  )
}

export default UserCard;

const Wrapper = styled.div`
  width: 350px;
  padding: 15px 10px;
  color: ${({ theme }) => theme.darkgray};
  border: 1px solid ${({ theme }) => theme.black};
`;

const Detail = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
`;

const Value = styled.span`
   margin-left: 7px;
  font-weight: 400;
`;

