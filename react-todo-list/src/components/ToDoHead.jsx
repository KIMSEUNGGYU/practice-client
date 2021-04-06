import React from 'react';
import styled from '@emotion/styled';
import theme from '@src/theme';

const Header = styled.header`
  padding: 2em;
  border-bottom: 1px solid ${theme.borderColor};
`;

const Title = styled.h1``;
const RestCount = styled.span`
  color: ${theme.mainColor};
  font-weight: bold;
`;

const TodoHead = ({ todos }) => {
  const restCount = todos.filter((todo) => !todo.done).length;
  return (
    <Header>
      <Title>TODO List</Title>
      <RestCount>할 일 {restCount}개 남음</RestCount>
    </Header>
  );
};

export default TodoHead;
