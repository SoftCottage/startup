import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const [authState, setAuthState] = React.useState(
    userName ? AuthState.Authenticated : AuthState.Unauthenticated
  );

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark bg-dark navbar-expand'>
            <div className='navbar-brand'>OneSecond</div>
            <menu className='navbar-nav me-auto'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  Login
                </NavLink>
              </li>

              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/play'>
                    Play
                  </NavLink>
                </li>
              )}

              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/scores'>
                    Scores
                  </NavLink>
                </li>
              )}

              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);

                  if (authState === AuthState.Authenticated) {
                    localStorage.setItem('userName', userName);
                  } else {
                    localStorage.removeItem('userName');
                  }
                }}
              />
            }
          />
          <Route path='/play' element={<Play userName={userName} />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="bg-dark mt-auto">
          <div className="container-fluid">
            <span>Kaden Hardcastle</span>
            <a className="ms-3" href="https://github.com/SoftCottage/startup">
              GitHub
            </a>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
