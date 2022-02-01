import React from 'react';

function App() {
  return (
    <div className="App">
      <form>
        <h1 data-cy="title">Tests with cypress</h1>
        <input
          data-cy="email"
          type="email"
        />
        <input
          data-cy="password"
          type="password"
        />
        <button
          data-cy="login"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
