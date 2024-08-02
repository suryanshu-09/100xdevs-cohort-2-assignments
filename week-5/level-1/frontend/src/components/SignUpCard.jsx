import '../css/Admin.css'
import { signUp } from '../utils/signUp'
import { useRef } from 'react'
export function SignUpCard() {
  const username = useRef();
  const password = useRef()
  return (
    <>
      <div id='sign_up_div'>
        <form id='sign_up_card'>
          <div id='title'>Sign Up Form  </div>
          <div id='username_div'>
            <label>Username:</label>
            <input ref={username} type="text" />
          </div>
          <div id='password_div'>
            <label>Password:</label>
            <input ref={password} type="password" />
          </div>
          <div id="sign_up_button_div">
            <button id="sign_up_button" onClick={(event) => {
              event.preventDefault();
              signUp(username, password)
              }}>Submit</button>
          </div>
        </form >
      </div >
    </>
  )
}

