import { css, Global } from '@emotion/react';

import TodoTemplate from '@components/TodoTemplate';
import TodoHead from '@components/TodoHead';

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
      </TodoTemplate>

      <h1>Hello</h1>
    </>
  );
}

export default App;
