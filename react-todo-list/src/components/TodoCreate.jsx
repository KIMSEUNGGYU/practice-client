import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@src/theme';
import { MdAdd } from 'react-icons/md';

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: ${theme.inputBoxColor};
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid ${theme.borderColor};
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const CircleButton = styled.button`
  &:hover {
    background: ${theme.hoverColor};
  }
  &:active {
    background: ${theme.activeColor};
  }
  /* z-index: 5; */
  width: 80px;
  height: 80px;
  cursor: pointer;
  background: ${theme.mainColor};
  border: none;
  outline: none;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  color: white;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.125s all ease-in;

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(true);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default TodoCreate;
