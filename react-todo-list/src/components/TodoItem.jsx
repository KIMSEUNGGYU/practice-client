import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';

import { MdDone, MdDelete } from 'react-icons/md';
import theme from '@src/theme';

const RemoveBlock = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  font-size: 32px;
  cursor: pointer;
  color: #dee2e6;
  &:hover {
    color: ${theme.redColor};
  }
  visibility: hidden;
`;

const ItemBlock = styled.div`
  padding: 12px 0;
  display: flex;
  align-items: center;
  &:hover {
    ${RemoveBlock} {
      visibility: visible;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  font-size: 24px;
  border: 1px solid ${theme.borderColor};
  border-radius: 50%;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid ${theme.mainColor};
      color: ${theme.mainColor};
    `};
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: ${theme.checkTextColor};
    `}
`;

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(todo);
  };
  const handleDelete = () => {
    onDelete(todo);
  };

  const { text, done } = todo;
  return (
    <ItemBlock>
      <CheckCircle done={done} onClick={handleToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <RemoveBlock onClick={handleDelete}>
        <MdDelete />
      </RemoveBlock>
    </ItemBlock>
  );
};

export default TodoItem;
