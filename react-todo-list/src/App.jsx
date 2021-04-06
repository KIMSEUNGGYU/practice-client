import { css, Global } from '@emotion/react';

import TodoTemplate from '@components/TodoTemplate';
import TodoHead from '@src/components/TodoHead';
import TodoList from '@src/components/TodoList';

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
      </TodoTemplate>
    </>
  );
}

export default App;
