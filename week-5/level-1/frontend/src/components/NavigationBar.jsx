import { useEffect, useState, useRef, useCallback } from 'react'
import { BusinessCards } from '../pages/BusinessCards'
import { EditCards } from '../pages/EditCards'
import { Admin } from '../pages/Admin'
import '../css/NavigationBar.css'
import { defaultHeaders, setHeaders } from '../utils/setHeaders'
export function NavigationBar() {
  const [businessCards, setBusinessCards] = useState(true);
  const [editBusinessCards, setEditBusinessCards] = useState(false);
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const bc = useRef();
  const bce = useRef();
  const si = useRef();
  const su = useRef();
  const businessCardsLoad = useCallback(() => {
    setBusinessCards(!businessCards);
    setEditBusinessCards(false);
    setSignIn(false);
    setSignUp(false);
  }, [businessCards]);
  const businessCardsEditLoad = useCallback(() => {
    setEditBusinessCards(!editBusinessCards);
    setBusinessCards(false);
    setSignIn(false);
    setSignUp(false);
  }, [editBusinessCards]);
  const signInLoad = useCallback(() => {
    setSignIn(!signIn);
    setBusinessCards(false);
    setEditBusinessCards(false);
    setSignUp(false);
  }, [signIn]);
  const signUpLoad = useCallback(() => {
    setSignUp(!signUp);
    setBusinessCards(false);
    setEditBusinessCards(false);
    setSignIn(false);
  }, [signUp]);
  useEffect(() => {
    if (businessCards) {
      bc.current.style.backgroundColor = "#7F8CC0";
    } else {
      bc.current.style.backgroundColor = "#1C1C23";
    }
  }, [businessCards])
  useEffect(() => {
    if (editBusinessCards) {
      bce.current.style.backgroundColor = "#7F8CC0";
    } else {
      bce.current.style.backgroundColor = "#1C1C23";
    }
  }, [editBusinessCards])
  useEffect(() => {
    if (signIn) {
      si.current.style.backgroundColor = "#7F8CC0";
    } else {
      si.current.style.backgroundColor = "#1C1C23";
    }
  }, [signIn])
  useEffect(() => {
    if (signUp) {
      su.current.style.backgroundColor = "#7F8CC0";
    } else {
      su.current.style.backgroundColor = "#1C1C23";
    }
  }, [signUp])
  function deleteAccount() {
    fetch("http://localhost:3000/delete", {
      method: "DELETE",
      headers: {
        username: defaultHeaders.username,
        Authorization: defaultHeaders.Authorization
      }
    })
      .then(async (res) => {
        const data = await res.json();
        alert(`Status: ${res.status} ${data.msg}`)
      });
  }
  function signOut() {
    if (defaultHeaders.username === "") {
      alert("Sign in first")
      return;
    }
    setHeaders("", "");
    alert("You have signed out");
  }
  return <div>
    <div id="navigation-bar">
      <div>
        <button id="business-cards" ref={bc} onClick={businessCardsLoad}>Business Cards</button>
        <button id="business-cards-edit" ref={bce} onClick={businessCardsEditLoad}>Edit Business Cards</button>
      </div>
      <div>
        <button id="sign-in" ref={si} onClick={signInLoad}>Sign In</button>
        <button id="sign-up" ref={su} onClick={signUpLoad}>Sign Up</button>
        <button id="sign-out" onClick={signOut}>Sign Out</button>
        <button id="delete-admin" onClick={deleteAccount}>Delete Account</button>
      </div>
    </div>
    {businessCards && <BusinessCards />}
    {editBusinessCards && <EditCards businessCardsLoad={businessCardsLoad} />}
    {(signIn | signUp) && <Admin businessCardsLoad={businessCardsLoad} signIn={signIn} signUp={signUp} />}
    {!(businessCards | editBusinessCards | signIn | signUp) && <BusinessCards />}
  </div>

}
