import { useState, FC } from 'react';

import logo from './logo.svg';

import style from './App.module.scss';

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={style.app}>
      <header className={style.app_header}>
        <img src={logo} className={style.app_logo} alt="logo" />
        <p className="hello" data-testid="hello">
          Hello Vite + React!
        </p>
        <p>
          <button
            type="button"
            className="button"
            onClick={() => setCount(v => v + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={style.app_link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={style.app_link}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
