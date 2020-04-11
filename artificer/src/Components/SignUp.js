import React, {useCallback } from 'react'
import { withRouter } from 'react-router'
import firebaseConfig from '../base'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    console.log("Made it here at least");
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push('/');
    } catch(error) {
      alert(error);
    }
  }, [history]);

  const redirectLogIn = () => {
    history.push('/logIn');
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={redirectLogIn}>Log In</button>
    </div>
  );
}

export default SignUp;
