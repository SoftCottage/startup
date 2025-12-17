import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './authenticated.css';

export function Authenticated({ userName, onLogout }) {
  const navigate = useNavigate();

  function logout() {
    fetch('/api/auth/logout', {
      method: 'delete',
    })
      .catch(() => {})
      .finally(() => {
        localStorage.removeItem('userName');
        onLogout();
      });
  }

  return (
    <div>
      <div className='playerName'>{userName}</div>
      <Button variant='primary' onClick={() => navigate('/play')}>
        Play
      </Button>
      <Button variant='secondary' onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
