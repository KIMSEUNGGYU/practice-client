import { useState } from 'react';
import { css, Global } from '@emotion/react';
import TodoTemplate from '@components/TodoTemplate';
import TodoHead from '@components/TodoHead';
import TodoList from '@components/TodoList';
import TodoCreate from '@components/TodoCreate';

const globalStyle = css`
  body {
    background: grey;
    height: 100vh;
  }
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '프로그래밍 학습하기',
      done: true,
    },
    {
      id: 2,
      text: '타입스크립트 학습하기',
      done: true,
    },
    {
      id: 3,
      text: '객체지향 학습하기',
      done: false,
    },
  ]);

  const onToggle = (todo) => {
    setTodos(todos.map((item) => (item.id === todo.id ? { ...item, done: !item.done } : item)));
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const onAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <Global styles={globalStyle} />
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
        <TodoCreate onAdd={onAdd} />
      </TodoTemplate>
    </>
  );
}

export default App;
