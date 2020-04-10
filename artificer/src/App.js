import React, { useState } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Security, LoginCallback } from '@okta/okta-react';
import LogButton from './Components/LogButton';
import axios from 'axios';
import UploadPhotoButton from './Components/UploadPhotoButton';
import AllImages from './Components/AllImages';
import NavBar from './Components/NavBar'

const config = {
  issuer: 'https://dev-136257.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa3nezs5WnZ3K7z64x6',
  pkce: true
};



const App = () => {

  return (
    <div className="App">
    <NavBar />
    <UploadPhotoButton />
    <AllImages />

    </div>
  );
}

export default App;
