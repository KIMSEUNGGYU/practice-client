import { css, Global } from '@emotion/react';

import TodoTemplate from '@components/TodoTemplate';
import TodoHead from '@components/TodoHead';
import TodoList from '@components/TodoList';
import TodoCreate from '@components/TodoCreate';

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            background: grey;
            height: 100vh;
          }
        `}
      />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
