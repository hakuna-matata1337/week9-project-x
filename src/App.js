import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Home from './components/home/'
import UserArea from './components/user/'
import Notice from './components/Notice';

// Style
import './style/App.scss';

export default () => {
  const [session, setSession] = useState(null);
  const [notices, setNotice] = useState([]);

  useEffect(() => {
    const storageSession = localStorage.getItem('daBomb_session');
    if (storageSession) {
      setSession(JSON.parse(storageSession));
    }
  }, []);

  return (
    <Router>
      {session ? <UserArea passed={{ setSession }} /> : <Home passed={{ notices, setNotice, setSession }} />}
      <div className="notice-list">{notices.length > 0 && <Notice notice={notices} setNotice={setNotice} />}</div>
    </Router>
  );
}
