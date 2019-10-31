import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Home from './components/home/'
import UserArea from './components/user/'
import Notice from './components/Notice';

// Style
import './style/App.scss';

export default () => {
  const [session, setSession] = useState({ username: null });
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const storageSession = localStorage.getItem('daBomb_session');
    if (storageSession) {
      setSession(JSON.parse(storageSession));
    }
  }, []);

  return (
    <Router>
      {session.username ? <UserArea passed={{ notice, setNotice, session, setSession }} /> : <Home passed={{ notice, setNotice, setSession }} />}
      {notice && <Notice passed={{ notice, setNotice }} />}
    </Router>
  );
}
