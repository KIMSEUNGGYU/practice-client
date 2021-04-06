import React from 'react';
import styled from '@emotion/styled';
import TodoItem from '@components/TodoItem';

const ListTemplate = styled.div`
  /* flex: 1 은 해당 공간 다 쓴다는 의미? */
  flex: 1;
  padding: 2em;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = ({ children }) => {
  return (
    <ListTemplate>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ListTemplate>
  );
};

export default TodoList;
