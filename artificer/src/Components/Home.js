import React from 'react'
import UploadPhotoButton from './UploadPhotoButton';
import AllImages from './AllImages';
import NavBar from './NavBar'
import firebaseConfig from '../base'

const Home = () => {
  return (
    <div>
      <NavBar />
      <UploadPhotoButton />
      <AllImages />
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign Out</button>
    </div>
  );
}

export default Home;
