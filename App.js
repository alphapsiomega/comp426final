import React, {useState, useEffect} from 'react';
import './App.scss';
import Login from "./components/account/Login";
import CreateAccount from "./components/account/CreateAccount";
import CheckJwt from "./components/account/CheckJWT";
import Logout from "./components/account/Logout";
import {getStatus} from "./api/account/Account";


// Entry point
function App() {
  const [loggedIn, setLoggedIn] = useState('checking');

  // check whether user is logged in already
  useEffect(() => {
    (async () => {
      let res = await getStatus();
      setLoggedIn(res ? res : 'invalid');
    })();
  }, []);

  if (loggedIn === 'checking') return <div>Checking if logged in</div>;

  return (
    <div className="App content">
      {loggedIn === 'invalid' ?
        <div className="account-components">
          <Login/>
          <CreateAccount/>
        </div>
        :
        <h3>
          <span className="is-italic is-size-6">logged in as</span> {loggedIn.user.name}
        </h3>
      }
      <Logout/>
      <br/>
      <CheckJwt/>
      <hr/>
    </div>
  );
}

export default App;
