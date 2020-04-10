import React from 'react';
import Post from './Post';
import * as firebase from 'firebase';

const allImages = () => {
  // Create a reference under which you want to list
let storageRef = firebase.storage().ref();
let listRef = storageRef.child('images/');

let images = [...Array(3)];
let i = 0;
let lastUrl = "";
// Find all the prefixes and items.
listRef.listAll().then(function(res) {
  res.items.forEach(function(itemRef) {
    itemRef.getDownloadURL().then(function(url) {
      lastUrl = url;
    });
  });
}).catch(function(error) {
  console.log(error);
});

 console.log(lastUrl);

 return (
   <div>
        <img src={lastUrl} />;
   </div>
 )

}

export default allImages;
