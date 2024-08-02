import '../css/Admin.css'
import { useRef } from 'react'
import { signIn } from '../utils/signIn'
export function SignInCard({ businessCardsLoad }) {
  const username = useRef();
  const password = useRef()
  return (
    <>
      <div id='sign_in_div'>
        <form id='sign_in_card'>
          <div id='title'>Sign In Form  </div>
          <div id='username_div'>
            <label>Username:</label>
            <input ref={username} type="text" />
          </div>
          <div id='password_div'>
            <label>Password:</label>
            <input ref={password} type="password" />
          </div>
          <div id="sign_in_button_div">
            <button id="sign_in_button" onClick={async (event) => {
              event.preventDefault();
              const load = await signIn(username, password);
              if (load) {
                businessCardsLoad();
              }
            }}>Submit</button>
          </div>
        </form >
      </div >
    </>
  )
}


