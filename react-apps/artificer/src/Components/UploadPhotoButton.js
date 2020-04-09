import * as firebase from 'firebase';
import React, { useState } from 'react';

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: 'AIzaSyALKHTz_Lv92B1EZvTEjqvIKnNDrQVQNgw',
  storageBucket: 'gs://artificer-f8573.appspot.com/'
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

const UploadPhotoButton = () => {
  const [currImage, setCurrImage] = useState(null);
  const [url, changeUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  const fileSelectHandler = event => {
   setCurrImage(event.target.files[0]);
  }

  const fileUploadHandler = () => {
    const upload = storage.ref(`images/${currImage.name}`).put(currImage);
    upload.on('state_changed',
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
      setProgress(progress);
    }, (error) => {
      //error function
      console.log(error);
    }, () => {
      storage.ref('images').child(currImage.name).getDownloadURL().then(url => {
        console.log(url);
        changeUrl(url);
      })
    });
  }

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      <img src={url || 'http://via.placeholder.com/400x300'} alt="Uploaded Image" height="300" width="400"/>
      <br />
      <br />
      <input type="file" onChange={fileSelectHandler}/>
      <button onClick={fileUploadHandler}>Upload</button>
      <br />
    </div>
  );
}

export default UploadPhotoButton;
