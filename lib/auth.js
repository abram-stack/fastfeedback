import React, {useState, useContext, createContext, useEffect} from 'react';
import firebase from './firebase';
import { createUser } from './db';
import Cookies from 'js-cookie';
const authContext = createContext();


// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function AuthProvider({children}) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}


// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
}

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handlerUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      const { token, ...userWithoutToken } = user;
      
      createUser(user.uid, userWithoutToken);
      setUser(user);
      
      Cookies.set('fast-feedback-auth', true, {
        expires: 1
      })

      return user;
    } else {
      setUser(false);
      Cookies.remove('fast-feedback-auth');
      
      return false
    }
  }

  const signinWithGithub = (email, password) => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => handlerUser(response.user));
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handlerUser(false));
  };

  // if the state changes in our auth, it will either update user in our state, 
  // or clear it out and set it to false
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handlerUser);
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout
  }
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    token: user.za,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
  }
}

// logic = 
// 1. we create context, (shared state)
//  1.a useAuth is re-usable function or a HOOK that if we call this function from the children inside the provider, we will consume the context. thats why we need the provider as well
// 2. the provider (as function) that pass the param of the children., will call the function..:
//  2.a call the function of useProvideAuth which handles state and all the services(functions) return it back (signin, signup, etc), save into const auth
//    the provider itself will return as objectcontext(provider) we made earlier with props, and make use of the const auth    